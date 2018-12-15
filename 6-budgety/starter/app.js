// bugget controller
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }


    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
    };



    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //create new id

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new item 
            if (type === 'expense') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'income') {
                newItem = new Income(ID, des, val);
            }

            //push item to data structure
            data.allItems[type].push(newItem);
            return newItem;
        },

        deleteItem: function (type, id) {
            var index, ids;
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculateBudget: function () {
            // calculate total income and expenses
            calculateTotal('expense');
            calculateTotal('income');
            //calculate the budget: income - expenses
            data.budget = data.totals.income - data.totals.expense;

            //calculate the percentage of income that we spent
            if (data.totals.income > 0) {
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function () {
            data.allItems.expense.forEach(function (current) {
                current.calcPercentage(data.totals.income);
            });
        },

        getPercentages: function () {
            var allPerc = data.allItems.expense.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },


        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.income,
                totalExp: data.totals.expense,
                percentage: data.percentage
            }
        },
    };

})();


//UI controller
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'

    };

    var formatNumber = function (num, type) {
        var numSplit, int, dec;
        //+ - before the number
        // 2 decimal points
        //comma separating the thousands

        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');

        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        type === 'expense' ? sign = '-' : sign = '+';
        return sign + ' ' + int + '.' + dec;
    };

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function (obj, type) {
            // create html string with placeholder text
            var html, newHtml, element;

            if (type === 'income') {

                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete">                      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'expense') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%%id"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div>         <div class="item__percentage">21%</div><div class="item__delete">                      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


            //insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function (selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function (obj) {

            obj.budget > 0 ? type = 'income' : type = 'expense';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'income');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'expense');
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';

            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '-';
            }
        },

        displayPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMstrings.expPercLabel);

            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth: function () {
            var now, year, month;

            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        changeType: function () {
            var fields = document.querySelectorAll(
                DOMstrings.inputType +',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            
        nodeListForEach(fields, function (cur) {
            cur.classList.toggle('red-focus');
        });
            
        document.querySelector(DOMstrings.inputBtn).classList.toggle('red');


    },


    getDOMstrings: function () {
        return DOMstrings;
    }
};
})();

//global app controller
var controller = (function (bugetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };

    var updateBudget = function () {

        // caclulate the budget
        bugetCtrl.calculateBudget();

        // return the budget
        var budget = bugetCtrl.getBudget();

        // display the budget on the UI
        console.log(budget);

        UICtrl.displayBudget(budget);
        //
    };

    var updatePercentages = function () {
        // calculate percentages
        bugetCtrl.calculatePercentages();
        // read percentages from the budget controller
        var percentages = bugetCtrl.getPercentages();
        // update the UI with 
        console.log('Pers:', percentages);

        UICtrl.displayPercentages(percentages);
    }

    var ctrlAddItem = function () {

        var input, newItem;
        //1. get input data
        input = UICtrl.getInput();
        console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //2. add item to budget controller
            newItem = bugetCtrl.addItem(input.type, input.description, input.value);


            //3. add the item to the UI

            UICtrl.addListItem(newItem, input.type);

            //4. clear fields
            UICtrl.clearFields();

            //5. Calculate and update budget

            updateBudget();

            //6.calculate and update percentages

            updatePercentages();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            //income-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //delete item from data structure
            bugetCtrl.deleteItem(type, ID);

            //delete item from the UI
            UICtrl.deleteListItem(itemID);

            //update and show new totals
            updateBudget();

        }
    };

    return {
        init: function () {
            console.log('Application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();

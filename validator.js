


function Validator (option) {

    function getParent (element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            };
            element = element.parentElement;
        }
    };

    var selectorRules = {};

    // hàm này sẽ được gọi sau ở dưới khi onblur
    function Validate (inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.errorSelector);

        // lấy ra các rules 
        var rules = selectorRules[rule.selector]

        // lặp qua các rules và kiểm tra có errorMessage hay không (là có lỗi hay không)
        // nếu có lỗi thì dừng việc kiểm tra
        for ( var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default: errorMessage = rules[i](inputElement.value);
            }
            
            if (errorMessage) break;
        }

        if (errorMessage) {
            getParent(inputElement, option.formGroupSelector).classList.add('invalid');
            errorElement.innerText = errorMessage;
        } else {
            getParent(inputElement, option.formGroupSelector).classList.remove('invalid');
            errorElement.innerText = '';
        };

        return !errorMessage;
    }
    
    // lấy element của form
    var formElement = document.querySelector(option.form)

    if (formElement) {

        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // lặp qua từng rule và validate
            option.rules.forEach( function (rule) {
                var inputElement = formElement.querySelector(rule.selector);

                var isValid = Validate(inputElement, rule);
                if (!isValid) {isFormValid = false};

            });
            
            

            if (isFormValid) {

                // trường hợp msubmit với javascript
                if (typeof option.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked'))  {
                                    values[input.name] = '';
                                    return values;
                                };
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    option.onSubmit(formValues);
                }
            } 
            else {
                // formElement.submit();
            }
        }


        option.rules.forEach( function (rule) {    // dòng này là option chứ không phải formElement 

            // thêm rule cho object rỗng 
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }   else {
                selectorRules[rule.selector] = [rule.test]        // rule.selector là key của object rỗng selectorRules
            }
            // selectorRules cuối cùng sẽ thành một object có key là selector (id của ô input) và value là hàm test()
            // đoạn if() trên là: nếu selectorRules[rule.selector] không  phải là Array thì cho nó là Array và gán key đầu tiên là [rule.selector] và value đầu tiên là rule.test
            // còn nếu là Array thì nối Array sau vô bằng cách .push()

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                 // xử lý khi blur ra ngoài
                 inputElement.onblur = function () {
                    Validate (inputElement, rule);
                };

                // xử lý khi đang nhập nội dung vào ô input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.errorSelector);
                    getParent(inputElement, option.formGroupSelector).classList.remove('invalid');
                    errorElement.innerText = '';
                };
            })

            // if (inputElement) {
                
            //     // xử lý khi blur ra ngoài
            //     inputElement.onblur = function () {
            //         Validate (inputElement, rule);
            //     };

            //     // xử lý khi đang nhập nội dung vào ô input
            //     inputElement.oninput = function () {
            //         var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.errorSelector);
            //         getParent(inputElement, option.formGroupSelector).classList.remove('invalid');
            //         errorElement.innerText = '';
            //     };
            // }


        })
        
    }
};


    // nguyên tắc của các rule:
    // khi user nhập bị lỗi thì hiện ra message lỗi, còn nhập đúng thì không hiện gì (undefined) 

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này!';
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập trường này!';
        },
    };
};

Validator.minLength = function (selector, minLength, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : message || 'vui lòng nhập trường này!';
        },
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'vui lòng nhập trường này!'  // dòng này nhớ thêm dấu () sau getConfirmValue
        } 
    }
}





// b1: gọi các hàm bên file html trước
// b2 : qua file javascript định nghĩa các hàm đó
// b3: xuống return cho hai hàm isRequired và isEmail là một object
// b4: ở trong các hàm trên sẽ có một hàm test riêng để kiểm tra user nhập có đúng không
// b4: dùng hàm forEach để lặp qua các 2 thành phần của rules trong hàm Validator(option)
// b5: trong hàm forEach trên  đặt if(có inputElêmnt), trong if cho sự kiện onblur để kiểm tra
// b6: trong onblur lấy ra value (elemantcủainput.value) rồi sau đó gọi hàm test với đối số truyền vào là value
// b7: bắt đầu đi code cho hàm test (nhớ return)


// cách áp dụng nhiều rule cho một ô input:
// _ tạo một object rỗng seclectorRules để lưu lại các rule
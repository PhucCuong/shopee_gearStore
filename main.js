var categorys = document.querySelectorAll('.category-item')
var typeProducts = document.querySelectorAll('.grid__row--product')
var sortBtns = document.querySelectorAll('.grid__column-10 .btn')
var numberPageBtns = document.querySelectorAll('.pagination__item')

var imgProducts = document.querySelectorAll('.grid__column-2-10 .product-img-1')  // biến này khúc xử lí phải thêm .stye.backgroundImage = ''

var active = document.querySelector('.category-item.active')


var currentIndex = 0;
var currentQuantity = 1;
var loginBtn = document.querySelector('.navbar__list-item.login')
var registerBtn = document.querySelector('.navbar__list-item.register')
var loginCompleteBtns = document.querySelectorAll('.btn-login')
var myCart = [];
var appearSelector = document.querySelector('.appear')



// array về laptop
var pageListOfLaptop = [
    
    {
        image: './assets/img/laptop1.jpg',
        name: 'Laptop Dell INS15 3505....',
        old: '14.999.000đ',
        new: '14.200.000đ',
    },
    
    {
        image: './assets/img/laptop2.jpg',
        name: 'Acer Nitro 5',
        old: '23.990.000đ',
        new: '21.590.000đ',
    },
    
    {
        image: './assets/img/laptop3.jpg',
        name: 'MSI Gaming GF63',
        old: '22.990.000đ',
        new: '20.690.000đ',
    },
    
    {
        image: './assets/img/laptop4.jpg',
        name: 'Acer Aspire A315',
        old: '11.990.000đ',
        new: '10.790.000đ',
    },
    
    {
        image: './assets/img/laptop5.jpg',
        name: 'Asus Vivobook A415EA',
        old: '18.990.000đ',
        new: '17.090.000đ',
    },
    
    {
        image: './assets/img/laptop6.jpg',
        name: 'Macbook Pro M1 8-core CPU/16GB',
        old: '39.990.000đ',
        new: '35.990.000đ',
    }
]



// array về bàn phím
var pageListOfKeyboard = [
    
    {
        image: './assets/img/keyboard1.png',
        name: 'Bàn phím Corsair K70 RGB MK.2 SE',
        old: '4.450.000đ',
        new: '3.690.000đ',
    },
    
    {
        image: './assets/img/keyboard2.png',
        name: 'Bàn phím Logitech G913 TKL Lightspeed Wireless',
        old: '5.440.000đ',
        new: '4.190.000đ',
    },
    
    {
        image: './assets/img/keyboard3.jpg',
        name: 'Bàn phím Corsair K95 RGB Platinum XT',
        old: '4.690.000đ',
        new: '4.290.000đ',
    },
    
    {
        image: './assets/img/keyboard4.jpg',
        name: 'Bàn phím Logitech G913 TKL Lightspeed Wireless',
        old: '5.440.000đ',
        new: '4.190.000đ',
    },
    
    {
        image: './assets/img/keyboard5.jpg',
        name: 'Bàn phím cơ Corsair K100 RGB',
        old: '5.390.000đ',
        new: '5.290.000đ',
    },
    
    {
        image: './assets/img/keyboard6.png',
        name: 'Bàn phím Corsair K70 RGB MK.2 SE',
        old: '4.450.000đ',
        new: '3.690.000đ',
    }
]


// array về chuột
var pageListOfMouse = [
    
    {
        image: './assets/img/mouse1.png',
        name: 'Chuột Logitech G Pro Wireless',
        old: '3.390.000đ',
        new: '2.990.000đ',
    },
    
    {
        image: './assets/img/mouse2.jpg',
        name: 'Chuột Razer Viper Ultimate',
        old: '2.990.000đ',
        new: '2.690.000đ',
    },
    
    {
        image: './assets/img/mouse3.png',
        name: 'Chuột Logitech G Pro Wireless League Of Legends',
        old: '3.790.000đ',
        new: '2.890.000đ',
    },
    
    {
        image: './assets/img/mouse4.jpg',
        name: 'Chuột Logitech G Pro X Superlight Wireless Black',
        old: '3.490.000đ',
        new: '2.990.000đ',
    },
    
    {
        image: './assets/img/mouse5.jpg',
        name: 'Chuột Logitech G Pro X Superlight Wireless White',
        old: '3.490.000đ',
        new: '2.990.000đ',
    },
    
    {
        image: './assets/img/mouse6.jpg',
        name: 'Chuột Razer DeathAdder V2 Pro',
        old: '3.390.000đ',
        new: '2.990.000đ',
    }
]




// hiển thị ra row sản phẩm, hàm login , hàm register khi mới đăng nhập trang web
var currentIndex = 0;
typeProducts[0].innerHTML = `
${oneProductOfLaptop(currentIndex)}
${oneProductOfLaptop(currentIndex)}
${oneProductOfLaptop(currentIndex)}
${oneProductOfLaptop(currentIndex)}
${oneProductOfLaptop(currentIndex)}
`;







// xử lý nhấn nút chọn các loại sản phẩm
categorys.forEach(function (category, index) {
    category.onclick = function () {
        document.querySelector('.category-item.active').classList.remove('active');
        this.classList.add('active');
        currentIndex = 0;
        
        if (index === 0) {
            document.querySelector('.grid__row--product.appear').classList.remove('appear')
            document.querySelectorAll('.grid__row--product')[0].classList.add('appear')
            getFirstLaptop();
            
            
        } else if (index === 1) {
            document.querySelector('.grid__row--product.appear').classList.remove('appear')
            document.querySelectorAll('.grid__row--product')[1].classList.add('appear')
            getFirstKeyboard();
            
            
        } else if (index === 2) {
            document.querySelector('.grid__row--product.appear').classList.remove('appear')
            document.querySelectorAll('.grid__row--product')[2].classList.add('appear')
            getFirstMouse();
            
            
        }
    }  
})




// xử lý nhấn nút sắp xếp sản phẩm theo yêu cầu user
sortBtns.forEach(function (sortBtn) {
    sortBtn.onclick = function () {
        document.querySelector('.btn.btn--premiuncolor').classList.remove('btn--premiuncolor')
        this.classList.add('btn--premiuncolor')
    }
})


// lặp qua các nút chọn số trang
numberPageBtns.forEach(function (numberPageBtn, index) {

     // đổi màu khi nhấn nút chọn số trang
    numberPageBtn.onclick = function () {
        document.querySelector('.pagination__item.btn--premiuncolor').classList.remove('btn--premiuncolor')
        this.classList.add('btn--premiuncolor')

        var laptop = document.querySelector('.grid__row--product.laptop.appear')
        var keyboard = document.querySelector('.grid__row--product.keyboard.appear')
        var mouse = document.querySelector('.grid__row--product.mouse.appear')
        
        if (laptop) {

            if (index === 0) {
                if (currentIndex < 0) {currentIndex = 0}          // lưu ý
                currentIndex = --currentIndex
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                

            } else if (index === 1) {
                currentIndex = 0;
                typeProducts[0].innerHTML = ` 
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                

            } else if (index === 2) {

                currentIndex = 1;
                typeProducts[0].innerHTML =   `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                  

            } else if (index === 3) {

                currentIndex = 2;
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                

            } else if (index === 4) {

                currentIndex = 3;
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                
                                
            } else if (index === 5) {

                currentIndex = 4;
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                

            } else if (index === 6) {

                currentIndex = 5;
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `
                

            } else if (index === 7) {

                if (currentIndex > 5) {currentIndex = 5}
                currentIndex = ++currentIndex;
                typeProducts[0].innerHTML = `
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `           
                

            }   

        } else if (keyboard) {
            
            if (index === 0) {
                if (currentIndex < 0) {currentIndex = 0}
                currentIndex = --currentIndex
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 1) { 
                currentIndex = 0;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 2) {

                currentIndex = 1;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 3) {

                currentIndex = 2;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 4) {

                currentIndex = 3;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 5) {

                currentIndex = 4;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                

            } else if (index === 6) {

                currentIndex = 5;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                
                
            } else if (index === 7) {

                if (currentIndex > 5) {currentIndex = 5}
                currentIndex = ++currentIndex;
                typeProducts[1].innerHTML = `
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `
                
                
            }   

        } else if (mouse) {

            if (index === 0) {
                if (currentIndex < 0) {currentIndex = 0}
                currentIndex = --currentIndex;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                

            } else if (index === 1) {
                currentIndex = 0;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                
                
            } else if (index === 2) {

                currentIndex = 1;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                
                
            } else if (index === 3) {

                currentIndex = 2;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                

            } else if (index === 4) {

                currentIndex = 3;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                

            } else if (index === 5) {

                currentIndex = 4;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                
                
            } else if (index === 6) {

                currentIndex = 5;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                

            } else if (index === 7) {

                if (currentIndex > 5) {currentIndex = 5}
                currentIndex = ++currentIndex;
                typeProducts[2].innerHTML = `
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `
                

            }   

        }
    }

})



// xử lý nút đăng nhập
loginBtn.onclick = function () {
    login();
}


// xử lý nút đăng ký
registerBtn.onclick = function () {
    register();
}




//




// hàm nhấn nút Thêm vào giỏ hàng của Laptop
function addLaptopToCart (currentIndex) {
    alert('Thêm vào giỏ hàng thành công')
    myCart = myCart.concat(`${laptopInCart(currentIndex)}`)
    document.querySelector('.no-history').innerHTML = myCart
}



// hàm nhấn nút Thêm vào giỏ hàng của keyboard
function addKeyboardToCart (currentIndex) {
    alert('Thêm vào giỏ hàng thành công')
    myCart = myCart.concat(`${keyboardInCart(currentIndex)}`)
    document.querySelector('.no-history').innerHTML = myCart
}



// hàm nhấn nút Thêm vào giỏ hàng của mouse
function addMouseToCart (currentIndex) {
    alert('Thêm vào giỏ hàng thành công')
    myCart = myCart.concat(`${mouseInCart(currentIndex)}`)
    document.querySelector('.no-history').innerHTML = myCart
}




// hàm nhấn vào nút đăng ký
function register () {
    document.querySelector('.modal-register').style.display = 'flex';
    loginCompleteBtns.forEach(function (loginCompleteBtn) {
        loginCompleteBtn.onclick = function () {
            document.querySelector('.modal-register').style.display = 'none';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.navbar__list-item--user').style.display = 'inline-flex';
        }
    });
    var loginInRegisterBtn = document.querySelector('.loginInRegister')
    loginInRegisterBtn.onclick = function () {
        document.querySelector('.modal-register').style.display = 'none';
        login();
    };
    var emailSelectorOfRegister = document.querySelector('#form-1 #email');
    var passwordSelectorOfRegister = document.querySelector('#form-1 #password');
    var passwordConfirm = document.querySelector('#form-1 #password-confirm');
    isEmail(emailSelectorOfRegister);
    isRequitedInput(passwordSelectorOfRegister);
    // isRequitedInput(passwordConfirm);
    isConfirm(passwordSelectorOfRegister, passwordConfirm)
}



// hàm nhấn vào nút đăng nhập
function login () {
    document.querySelector('.modal-login').style.display = 'flex';
    loginCompleteBtns.forEach(function (loginCompleteBtn) {
        loginCompleteBtn.onclick = function () {
            document.querySelector('.modal-login').style.display = 'none';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.navbar__list-item--user').style.display = 'inline-flex'
        }
    });
    var registerInLoginBtn = document.querySelector('.registerInLogin')
    registerInLoginBtn.onclick = function () {
        document.querySelector('.modal-login').style.display = 'none';
        register();
    };
    var emailSelectorOfLogin = document.querySelector('#form-2 .form-group #email');
    var passwordSelectorOfLogin = document.querySelector('#form-2 .form-group #password');
    isEmail(emailSelectorOfLogin);
    isRequitedInput(passwordSelectorOfLogin);
}



// hàm isrequited
function isRequitedInput (selector) {
    selector.onblur = function () {
        var parentSelector = selector.parentElement
        if (selector.value.length >= 6) {
            parentSelector.querySelector('.form-message').innerText = ''
        } else if (selector.value.length < 6 && selector.value.length > 0) {
            parentSelector.querySelector('.form-message').innerText = 'Vui lòng nhập ít nhất 6 kí tự!'
        } else {
            parentSelector.querySelector('.form-message').innerText = 'Vui lòng nhập trường này!'
        }
    }  
}



// hàm isEmail
function isEmail (selector) {
    selector.onblur = function () {
        var parentSelector = selector.parentElement
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(selector.value)) {
            parentSelector.querySelector('.form-message').innerText = ''
        } else {
            parentSelector.querySelector('.form-message').innerText = 'Vui lòng nhập đúng email!'
        }
   }
}



// hàm password confirm
function isConfirm (password, passwordconfirm) {
    passwordconfirm.onblur = function () {
        if (passwordconfirm.value !== password.value) {
            passwordconfirm.parentElement.querySelector('.form-message').innerText = 'vui lòng nhập trùng khớp với password ở trên!'
        } else {
            passwordconfirm.parentElement.querySelector('.form-message').innerText = ''
        }
    }
}


// hàm lấy row đầu tiên của mỗi sản phẩm

function getFirstLaptop () {
    typeProducts[0].innerHTML = `
                ${oneProductOfLaptop(0)}
                ${oneProductOfLaptop(0)}
                ${oneProductOfLaptop(0)}
                ${oneProductOfLaptop(0)}
                ${oneProductOfLaptop(0)}
            `
    document.querySelector('.pagination__item.btn--premiuncolor').classList.remove('btn--premiuncolor')
    numberPageBtns[1].classList.add('btn--premiuncolor')
}


function getFirstKeyboard () {
    typeProducts[1].innerHTML = `
                ${oneProductOfKeyboard(0)}
                ${oneProductOfKeyboard(0)}
                ${oneProductOfKeyboard(0)}
                ${oneProductOfKeyboard(0)}
                ${oneProductOfKeyboard(0)}
            `
    document.querySelector('.pagination__item.btn--premiuncolor').classList.remove('btn--premiuncolor')
    numberPageBtns[1].classList.add('btn--premiuncolor')
}


function getFirstMouse () {
    typeProducts[2].innerHTML = `
                ${oneProductOfMouse(0)}
                ${oneProductOfMouse(0)}
                ${oneProductOfMouse(0)}
                ${oneProductOfMouse(0)}
                ${oneProductOfMouse(0)}
            `
    document.querySelector('.pagination__item.btn--premiuncolor').classList.remove('btn--premiuncolor')
    numberPageBtns[1].classList.add('btn--premiuncolor')
}


// return một sản phẩm của laptop ở ngoài trang index
function oneProductOfLaptop (currentIndex) {
    return `
    <div class="grid__column-2-10 t-4 m-6" onclick="innerBodyByLaptop(currentIndex)">
            <div class="item">
                <div class="product-img-1" style="background-image: url('${pageListOfLaptop[currentIndex].image}');"></div>
            <div class="product-info">
                <h4>${pageListOfLaptop[currentIndex].name}</h4>
                <div class="product-price">
                    <span class="price-old">${pageListOfLaptop[currentIndex].old}</span><span class="price-new">${pageListOfLaptop[currentIndex].new}</span>
                </div>
                <div class="feedback" onclick="feedback()">
                    <div class="heart">
                        <i class="ti-heart"></i>
                    </div>
                    <div class="startBig">
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                    </div>
                </div>
                <div class="address">TP. Hồ Chí Minh</div>
                <div class="favorite">
                    <i class="ti-check"></i>
                    <span>Yếu thích</span>
                </div>
                <div class="reduce">
                    <p>10%</p>
                    <span>GIẢM</span>
                </div>
            </div>
        </div>
    </div>
    `
}




// return một sản phẩm của bàn phím ở ngoài trang index
function oneProductOfKeyboard (currentIndex) {
    return `
    <div class="grid__column-2-10 t-4 m-6" onclick="innerBodyByKeyboard(currentIndex)">
            <div class="item">
                <div class="product-img-1" style="background-image: url('${pageListOfKeyboard[currentIndex].image}');"></div>
            <div class="product-info">
                <h4>${pageListOfKeyboard[currentIndex].name}</h4>
                <div class="product-price">
                    <span class="price-old">${pageListOfKeyboard[currentIndex].old}</span><span class="price-new">${pageListOfKeyboard[currentIndex].new}</span>
                </div>
                <div class="feedback" onclick="feedback()">
                    <div class="heart">
                        <i class="ti-heart"></i>
                    </div>
                    <div class="startBig">
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                    </div>
                </div>
                <div class="address">TP. Hồ Chí Minh</div>
                <div class="favorite">
                    <i class="ti-check"></i>
                    <span>Yếu thích</span>
                </div>
                <div class="reduce">
                    <p>10%</p>
                    <span>GIẢM</span>
                </div>
            </div>
        </div>
    </div>
    `
}



// return một sản phẩm của chuột ở ngoài trang index
function oneProductOfMouse (currentIndex) {
    return `
    <div class="grid__column-2-10 t-4 m-6" onclick="innerBodyByMouse(currentIndex)">
            <div class="item">
                <div class="product-img-1" style="background-image: url('${pageListOfMouse[currentIndex].image}');"></div>
            <div class="product-info">
                <h4>${pageListOfMouse[currentIndex].name}</h4>
                <div class="product-price">
                    <span class="price-old">${pageListOfMouse[currentIndex].old}</span><span class="price-new">${pageListOfMouse[currentIndex].new}</span>
                </div>
                <div class="feedback" onclick="feedback()">
                    <div class="heart">
                        <i class="ti-heart"></i>
                    </div>
                    <div class="startBig">
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                        <div class="start">
                            <i class="ti-star"></i>
                        </div>
                    </div>
                </div>
                <div class="address">TP. Hồ Chí Minh</div>
                <div class="favorite">
                    <i class="ti-check"></i>
                    <span>Yếu thích</span>
                </div>
                <div class="reduce">
                    <p>10%</p>
                    <span>GIẢM</span>
                </div>
            </div>
        </div>
    </div>
    `
}



//

// return ra 1 trong các sản phẩm laptop để thanh toán                //
function tabPayLaptopProduct (currentIndex) {
    
    return `
        <div class="modal">
            <div class="modal__item">
                <i class="fas fa-times" onclick="closeModalLaptop()"></i>
                <img src="${pageListOfLaptop[currentIndex].image}" alt="" class="img-detail-product">
                <div class="content-detail-product">
                    <div class="name">${pageListOfLaptop[currentIndex].name}</div>
                    <div class="prince">
                        <div class="prince-old">${pageListOfLaptop[currentIndex].old}</div>
                        <div class="prince-new">${pageListOfLaptop[currentIndex].new}</div>
                    </div>
                    <div class="quantity">Số lượng:
                        <div class="minus" onclick="minusQuantity()">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="quantity-number">${currentQuantity}</div>
                        <div class="plus" onclick="plusQuantity()">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                    <div class="pay-or-cart">
                        <div class="cart" onclick="addLaptopToCart(currentIndex)">
                            <i class="far fa-shopping-cart"></i>
                            Thêm vào giỏ hàng
                        </div>
                        <div class="pay">mua ngay</div>
                    </div>
            </div>
        </div>
    `

}



// return ra 1 trong các sản phẩm keyboard để thanh toán
function tabPayKeyboardProduct (currentIndex) {
    
    return `
        <div class="modal">
            <div class="modal__item">
                <i class="fas fa-times" onclick="closeModalKeyboard()"></i>
                <img src="${pageListOfKeyboard[currentIndex].image}" alt="" class="img-detail-product">
                <div class="content-detail-product">
                    <div class="name">${pageListOfKeyboard[currentIndex].name}</div>
                    <div class="prince">
                        <div class="prince-old">${pageListOfKeyboard[currentIndex].old}</div>
                        <div class="prince-new">${pageListOfKeyboard[currentIndex].new}</div>
                    </div>
                    <div class="quantity">Số lượng:
                        <div class="minus" onclick="minusQuantity()">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="quantity-number">${currentQuantity}</div>
                        <div class="plus" onclick="plusQuantity()">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                    <div class="pay-or-cart">
                        <div class="cart" onclick="addKeyboardToCart(currentIndex)">
                            <i class="far fa-shopping-cart"></i>
                            Thêm vào giỏ hàng
                        </div>
                        <div class="pay">mua ngay</div>
                    </div>
            </div>
        </div>
    `

}



// return ra 1 trong các sản phẩm mouse để thanh toán
function tabPayMouseProduct (currentIndex) {
    
    return `
        <div class="modal">
            <div class="modal__item">
                <i class="fas fa-times" onclick="closeModalMouse()"></i>
                <img src="${pageListOfMouse[currentIndex].image}" alt="" class="img-detail-product">
                <div class="content-detail-product">
                    <div class="name">${pageListOfMouse[currentIndex].name}</div>
                    <div class="prince">
                        <div class="prince-old">${pageListOfMouse[currentIndex].old}</div>
                        <div class="prince-new">${pageListOfMouse[currentIndex].new}</div>
                    </div>
                    <div class="quantity">Số lượng:
                        <div class="minus" onclick="minusQuantity()">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="quantity-number">${currentQuantity}</div>
                        <div class="plus" onclick="plusQuantity()">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                    <div class="pay-or-cart">
                        <div class="cart" onclick="addMouseToCart(currentIndex)">
                            <i class="far fa-shopping-cart"></i>
                            Thêm vào giỏ hàng
                        </div>
                        <div class="pay">mua ngay</div>
                    </div>
            </div>
        </div>
    `

}



// return ra một sản phẩm laptop ở trong giỏ hàng
function laptopInCart (currentIndex) {
    return `
        <div class="history-title">Sản phẩm đã được thêm</div>
        <div class="incart">
            <img src="${pageListOfLaptop[currentIndex].image}" alt="">
            <div class="incart-name">${pageListOfLaptop[currentIndex].name}</div>
            <div class="incart-price">${pageListOfLaptop[currentIndex].new}</div>
        </div>
    `
}


//  return ra một sản phẩm keyboard ở trong giỏ hàng
function keyboardInCart (currentIndex) {
    return `
        <div class="history-title">Sản phẩm đã được thêm</div>
        <div class="incart">
            <img src="${pageListOfKeyboard[currentIndex].image}" alt="">
            <div class="incart-name">${pageListOfKeyboard[currentIndex].name}</div>
            <div class="incart-price">${pageListOfKeyboard[currentIndex].new}</div>
        </div>
    `
}


//  return ra một sản phẩm keyboard ở trong giỏ hàng
function mouseInCart (currentIndex) {
    return `
        <div class="history-title">Sản phẩm đã được thêm</div>
        <div class="incart">
            <img src="${pageListOfMouse[currentIndex].image}" alt="">
            <div class="incart-name">${pageListOfMouse[currentIndex].name}</div>
            <div class="incart-price">${pageListOfMouse[currentIndex].new}</div>
        </div>
    `
}




// các hàm nhấn nút tăng giảm số lượng khi thanh toán 
function minusQuantity () {
    if (currentQuantity <= 0) {
        currentQuantity = 0
    } else {
        currentQuantity = --currentQuantity;
    }
    
    document.querySelector('.quantity-number').innerText = currentQuantity;
}

function plusQuantity () {
    currentQuantity = ++currentQuantity;
    console.log(currentQuantity)
    document.querySelector('.quantity-number').innerText = currentQuantity;
}



// các hàm innerHTML (thay các element trong .grid__row--product = modal)



function innerBodyByLaptop (currentIndex) {
    document.querySelector('.grid__row--product.laptop.appear').innerHTML = `${tabPayLaptopProduct(currentIndex)}`;
}

function innerBodyByKeyboard (currentIndex) {
    document.querySelector('.grid__row--product.keyboard.appear').innerHTML = `${tabPayKeyboardProduct(currentIndex)}`
}

function innerBodyByMouse (currentIndex) {
    document.querySelector('.grid__row--product.mouse.appear').innerHTML = `${tabPayMouseProduct(currentIndex)}`
}



// các hàm close Modal


function closeModalLaptop () {
    var currentModal = document.querySelector('.modal');
    currentModal.style.display = 'none';
    currentModal.style.zIndex = -2;
    currentModal.style.opacity = 0;
    typeProducts[0].innerHTML = ` 
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                    ${oneProductOfLaptop(currentIndex)}
                `;
    currentQuantity = 1;
    
}


function closeModalKeyboard () {
    var currentModal = document.querySelector('.modal');
    currentModal.style.display = 'none';
    currentModal.style.zIndex = -2;
    currentModal.style.opacity = 0;
    typeProducts[1].innerHTML = ` 
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                    ${oneProductOfKeyboard(currentIndex)}
                `;
    currentQuantity = 1;
    
}


function closeModalMouse () {
    var currentModal = document.querySelector('.modal');
    currentModal.style.display = 'none';
    currentModal.style.zIndex = -2;
    currentModal.style.opacity = 0;
    typeProducts[2].innerHTML = ` 
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                    ${oneProductOfMouse(currentIndex)}
                `;
    currentQuantity = 1;
    
}




// các hàm feedback (thả tym thả sao)  (click thì hình không có màu display = none + hình có màu display = block)

function feedback () {
    
    
    
    var products = document.querySelectorAll('.grid__column-2-10')
    products.forEach(function (product) {
        
        event.stopPropagation();

         // xử lý nút thả tym
        var isHeart = false;
        var heartSelectors = product.querySelectorAll('.heart')
        heartSelectors.forEach(function (heartSelector) {
            heartSelector.onclick = function () {
                event.stopPropagation();
                if (isHeart) {
                    this.classList.remove('heart-color')
                    isHeart = false;
                } else {
                    this.classList.add('heart-color')
                    isHeart = true;
                }
            }
        })

            // xử lý nút thả sao
        var startGroupSelectors = document.querySelectorAll('.startBig')
        startGroupSelectors.forEach(function (startGroupSelector) {
            
            var startSelectors = startGroupSelector.querySelectorAll('.start')
            startSelectors.forEach(function (startSelector) {
                var isStart = false;
                startSelector.onclick = function () {
                    event.stopPropagation();
                    if (isStart) {
                        this.classList.remove('start-color');
                        isStart = false;
                    } else {
                        this.classList.add('start-color');
                        isStart = true;
                    }
                }
            })
        })
        

    })
 
}


// hàm ngăn chặn hành vi nổi bọt
// function stopPropa() {
//     event.stopPropagation();
// }



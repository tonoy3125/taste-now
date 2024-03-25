import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import './PopularCategory.css';
import SwiperSlider from './SwiperSlider/SwiperSlider';

const PopularCategoires = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const allFoods = [
        {
            "id": 1,
            "category": "pizza",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/021/311/747/original/pizza-transparent-background-png.png",
            "foodName": "Margherita Pizza",
            "brandName": "Pizza Palace",
            "price": "$10.99",
            "rating": "5"
        },
        {
            "id": 2,
            "category": "pizza",
            "foodImage": "https://pngimg.com/d/pizza_PNG43993.png",
            "foodName": "Pepperoni Pizza",
            "brandName": "Cheesy Crust",
            "price": "$12.99",
            "rating": "4.5"
        },
        {
            "id": 3,
            "category": "pizza",
            "foodImage": "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-modern-traditional-food-sasami-pizza-3d-model-png-image_6651528.png",
            "foodName": "Vegetarian Pizza",
            "brandName": "Garden Fresh",
            "price": "$11.99",
            "rating": "4.3"
        },
        {
            "id": 4,
            "category": "pizza",
            "foodImage": "https://png.pngtree.com/png-clipart/20231003/original/pngtree-pizza-pizza-png-pizza-ai-generated-png-image_13245852.png",
            "foodName": "BBQ Chicken Pizza",
            "brandName": "Smokehouse Pizzeria",
            "price": "$13.99",
            "rating": "4.0"
        },
        {
            "id": 5,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/originals/95/aa/34/95aa34722ae9ea7e8faa874e5d24ebab.png",
            "foodName": "Classic Cheeseburger",
            "brandName": "Burger Haven",
            "price": "$8.99",
            "rating" : "5"
        },
        {
            "id": 6,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/originals/c5/cc/20/c5cc2005ad651b73d324513750de085e.png",
            "foodName": "Double Bacon Burger",
            "brandName": "Greasy Spoon",
            "price": "$10.99",
            "rating": "4.5"
        },
        {
            "id": 7,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/736x/9a/eb/61/9aeb6114b6e19eb836a72f18f2d2b1cc.jpg",
            "foodName": "Spicy Chicken Burger",
            "brandName": "Hot & Crunchy",
            "price": "$9.99",
            "rating": "4.3",
        },
        {
            "id": 8,
            "category": "burger",
            "foodImage": "https://www.transparentpng.com/download/burger/hot-burger-king-hd-png-9dzyCE.png",
            "foodName": "Mushroom Swiss Burger",
            "brandName": "Juicy Burgers",
            "price": "$11.99",
            "rating": "4.0"
        },
        {
            "id": 9,
            "category": "salad",
            "foodImage": "https://p7.hiclipart.com/preview/862/110/569/greek-salad-caesar-salad-israeli-salad-turkish-cuisine-salad.jpg",
            "foodName": "Greek Salad",
            "brandName": "Healthy Greens",
            "price": "$7.99",
            "rating" : "5"
        },
        {
            "id": 10,
            "category": "salad",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/026/860/353/original/green-salad-with-tomato-and-fresh-vegetables-isolated-on-transparent-background-png.png",
            "foodName": "Caesar Salad",
            "brandName": "Fresh Crisp",
            "price": "$8.99",
            "rating": "4.5"
        },
        {
            "id": 11,
            "category": "salad",
            "foodImage": "https://www.pikpng.com/pngl/m/335-3353267_salads-transparent-background-png-clipart.png",
            "foodName": "Cobb Salad",
            "brandName": "Gourmet Delights",
            "price": "$9.99",
            "rating": "4.3"
        },
        {
            "id": 12,
            "category": "salad",
            "foodImage": "https://banner2.cleanpng.com/20180413/axq/kisspng-salad-zakuski-health-food-green-salad-5ad09fa36b5fd9.5099105315236217954398.jpg",
            "foodName": "Spinach Salad",
            "brandName": "Fresh n' Green",
            "price": "$8.99",
            "rating": "4.0"
        },
        {
            "id": 13,
            "category": "combo",
            "foodImage": "https://w7.pngwing.com/pngs/686/527/png-transparent-fast-food-hamburger-sushi-pizza-fast-food-food-breakfast-fast-food-restaurant-thumbnail.png",
            "foodName": "Combo 1",
            "brandName": "Fast Delights",
            "price": "$14.99",
            "rating" : "5"
        },
        {
            "id": 14,
            "category": "combo",
            "foodImage": "https://e7.pngegg.com/pngimages/317/251/png-clipart-fast-food-junk-food-hamburger-fried-chicken-kfc-fast-food-menu-flyer-food-recipe.png",
            "foodName": "Combo 2",
            "brandName": "Quick Bites",
            "price": "$16.99",
            "rating": "4.5"
        },
        {
            "id": 15,
            "category": "combo",
            "foodImage": "https://w7.pngwing.com/pngs/366/356/png-transparent-hamburger-whopper-chicken-sandwich-fried-chicken-fast-food-fried-chicken-food-recipe-fast-food-restaurant.png",
            "foodName": "Combo 3",
            "brandName": "Tasty Treats",
            "price": "$15.99",
            "rating": "4.3"
        },
        {
            "id": 16,
            "category": "combo",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/027/297/753/original/buffet-table-scene-of-take-out-or-delivery-foods-fried-chicken-wings-and-french-fries-isolated-on-white-transparent-background-ai-generate-png.png",
            "foodName": "Combo 4",
            "brandName": "Snack Shack",
            "price": "$13.99",
            "rating": "4.0"
        },
        {
            "id": 17,
            "category": "pizza",
            "foodImage": "https://image.similarpng.com/very-thumbnail/2022/06/Fresh-delicious-pizza-on-transparent-background-PNG.png",
            "foodName": "Supreme Pizza",
            "brandName": "Pizza Heaven",
            "price": "$15.99",
            "rating" : "5"
        },
        {
            "id": 18,
            "category": "burger",
            "foodImage": "https://toppng.com/uploads/preview/big-burger-11562902444grmy1oetg2.png",
            "foodName": "BBQ Bacon Burger",
            "brandName": "Smokehouse Grill",
            "price": "$12.99",
            "rating": "4.5"
        },
        {
            "id": 19,
            "category": "salad",
            "foodImage": "https://ongpng.com/wp-content/uploads/2023/10/salad.png",
            "foodName": "Caprese Salad",
            "brandName": "Mediterranean Eats",
            "price": "$10.99",
            "rating": "4.3",
        },
        {
            "id": 20,
            "category": "combo",
            "foodImage": "https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-gourmet-fried-food-mcdonald-s-fast-food-combo-png-image_2665442.jpg",
            "foodName": "Combo 5",
            "brandName": "Finger Lickin' Good",
            "price": "$18.99",
            "rating": "4.0"
        },
        {
            "id": 21,
            "category": "pizza",
            "foodImage": "https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png",
            "foodName": "Hawaiian Pizza",
            "brandName": "Tropical Pies",
            "price": "$14.99",
            "rating" : "5"
        },
        {
            "id": 22,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/originals/95/aa/34/95aa34722ae9ea7e8faa874e5d24ebab.png",
            "foodName": "Veggie Burger",
            "brandName": "Green Eats",
            "price": "$9.99",
            "rating": "4.5"
        },
        {
            "id": 23,
            "category": "salad",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/026/860/353/original/green-salad-with-tomato-and-fresh-vegetables-isolated-on-transparent-background-png.png",
            "foodName": "Nicoise Salad",
            "brandName": "Sea Breeze Salads",
            "price": "$11.99",
            "rating": "4.3"
        },
        {
            "id": 24,
            "category": "combo",
            "foodImage": "https://e7.pngegg.com/pngimages/317/251/png-clipart-fast-food-junk-food-hamburger-fried-chicken-kfc-fast-food-menu-flyer-food-recipe.png",
            "foodName": "Combo 6",
            "brandName": "Quick Fix",
            "price": "$17.99",
            "rating": "4.0"
        },
        {
            "id": 25,
            "category": "pizza",
            "foodImage": "https://image.similarpng.com/very-thumbnail/2022/03/Tomato-and-lettuce-salad-in-wooden-bowl-isolated-on-transparent-background-PNG.png",
            "foodName": "Vegetable Deluxe Pizza",
            "brandName": "Garden Fresh",
            "price": "$13.99",
            "rating" : "5"
        },
        {
            "id": 26,
            "category": "pizza",
            "foodImage": "https://img.lovepik.com/element/45007/3626.png_860.png",
            "foodName": "Meat Lover's Pizza",
            "brandName": "Carnivore's Delight",
            "price": "$16.99",
            "rating": "4.5"
        },
        {
            "id": 27,
            "category": "burger",
            "foodImage": "https://i.pinimg.com/originals/c5/cc/20/c5cc2005ad651b73d324513750de085e.png",
            "foodName": "Double Bacon Burger",
            "brandName": "Greasy Spoon",
            "price": "$10.99",
            "rating": "4.3"
        },
        {
            "id": 28,
            "category": "burger",
            "foodImage": "https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png",
            "foodName": "Cheese Stuffed Burger",
            "brandName": "Cheese Lover's Grill",
            "price": "$12.99",
            "rating": "4.0"
        },
        {
            "id": 29,
            "category": "salad",
            "foodImage": "https://banner2.cleanpng.com/20180413/axq/kisspng-salad-zakuski-health-food-green-salad-5ad09fa36b5fd9.5099105315236217954398.jpg",
            "foodName": "Mediterranean Salad",
            "brandName": "Mediterranean Eats",
            "price": "$9.99",
            "rating" : "5",
        },
        {
            "id": 30,
            "category": "salad",
            "foodImage": "https://ongpng.com/wp-content/uploads/2023/10/salad.png",
            "foodName": "Waldorf Salad",
            "brandName": "Fresh n' Crunchy",
            "price": "$8.99",
            "rating": "4.5"
        },
        {
            "id": 31,
            "category": "combo",
            "foodImage": "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png",
            "foodName": "Combo 7",
            "brandName": "Quick Bites",
            "price": "$19.99",
            "rating": "4.3"
        },
        {
            "id": 32,
            "category": "combo",
            "foodImage": "https://static.vecteezy.com/system/resources/previews/027/297/753/original/buffet-table-scene-of-take-out-or-delivery-foods-fried-chicken-wings-and-french-fries-isolated-on-white-transparent-background-ai-generate-png.png",
            "foodName": "Combo 8",
            "brandName": "Snack Attack",
            "price": "$18.99",
            "rating": "4.0"
        }
    ]



    const pizzas = allFoods?.filter(foods => foods.category === "pizza")
    const salads = allFoods?.filter(foods => foods.category === "salad")
    const burgers = allFoods?.filter(foods => foods.category === "burger")
    const combos = allFoods?.filter(foods => foods.category === "combo")
    return (
        <div className='popular-categories-container'>
            <h1 className="popular-categories-text-title">Our Popular <span className="special-text">Categories</span></h1>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="tabs-heading">
                        {/* pizzas tab */}
                        <Tab className={`${tabIndex === 0 ? 'active-tab' : 'inactive-tabs'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                                <path d="M32.1181 7.85635C27.8817 6.13042 23.4363 5.38342 18.5334 5.38342C13.6304 5.38342 8.84437 6.2053 4.93589 7.81983C4.19803 8.12118 3.54236 8.6417 4.01631 9.60056C4.40076 10.3795 13.6934 30.8616 17.2238 38.1671C17.3428 38.4139 17.5289 38.6221 17.7609 38.7679C17.9929 38.9136 18.2612 38.9909 18.5352 38.9909C18.8091 38.9909 19.0775 38.9136 19.3095 38.7679C19.5415 38.6221 19.7276 38.4139 19.8465 38.1671L33.0011 9.65535C33.2924 9.02524 33.0833 8.24903 32.1181 7.85635V7.85635Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M35.0056 4.16696C30.2506 2.28578 24.3934 1 18.5334 1C12.6734 1 6.90385 2.16706 2.04839 4.11217C1.6201 4.2875 0.817403 4.69205 1.03748 5.37238L1.92146 7.575C2.28673 8.32382 2.7132 8.32382 3.29673 8.32382C3.46019 8.32382 3.68849 8.2325 3.96153 8.12475C8.60813 6.3199 13.5486 5.39045 18.5334 5.38334C23.7167 5.38334 29.0269 6.47917 33.108 8.12292C33.4358 8.25077 33.6184 8.322 33.7728 8.322C34.3737 8.322 34.7207 8.52199 35.1426 7.58231L36.0348 5.38334C36.2183 4.83542 35.5791 4.39526 35.0056 4.16696Z" stroke={`${tabIndex === 0 ? "white" : "#F72D57"}`} strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M12.6889 17.0722C14.3028 17.0722 15.6111 15.7639 15.6111 14.15C15.6111 12.5361 14.3028 11.2278 12.6889 11.2278C11.075 11.2278 9.76669 12.5361 9.76669 14.15C9.76669 15.7639 11.075 17.0722 12.6889 17.0722Z" fill={`${tabIndex === 0 ? "white" : "#F72D57"}`} />
                                <path d="M24.3778 18.5334C25.9917 18.5334 27.3 17.2251 27.3 15.6112C27.3 13.9973 25.9917 12.689 24.3778 12.689C22.7639 12.689 21.4555 13.9973 21.4555 15.6112C21.4555 17.2251 22.7639 18.5334 24.3778 18.5334Z" fill={`${tabIndex === 0 ? "white" : "#F72D57"}`} />
                                <path d="M18.5333 28.7611C20.1472 28.7611 21.4556 27.4528 21.4556 25.8389C21.4556 24.225 20.1472 22.9167 18.5333 22.9167C16.9194 22.9167 15.6111 24.225 15.6111 25.8389C15.6111 27.4528 16.9194 28.7611 18.5333 28.7611Z" fill={`${tabIndex === 0 ? "white" : "#F72D57"}`} />
                            </svg>
                            <h3>Pizzas</h3>
                        </Tab>

                        {/* burgerss tab */}
                        <Tab className={`${tabIndex === 1 ? 'active-tab' : 'inactive-tabs'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 37 30" fill="none">
                                <path d="M23.75 20.25L29.6632 14.3368C30.008 13.9921 30.4173 13.7187 30.8677 13.5323C31.3181 13.3458 31.8008 13.2499 32.2882 13.25H32.5C33.4283 13.25 34.3185 13.6187 34.9749 14.2751C35.6313 14.9315 36 15.8217 36 16.75C36 17.6783 35.6313 18.5685 34.9749 19.2249C34.3185 19.8813 33.4283 20.25 32.5 20.25H4.5C3.57174 20.25 2.6815 19.8813 2.02513 19.2249C1.36875 18.5685 1 17.6783 1 16.75C1 15.8217 1.36875 14.9315 2.02513 14.2751C2.6815 13.6187 3.57174 13.25 4.5 13.25H12.4013C15.1855 13.2501 17.8558 14.3561 19.8247 16.3247L23.75 20.25ZM2.75 20.25H34.25V23.75C34.25 25.1424 33.6969 26.4777 32.7123 27.4623C31.7277 28.4469 30.3924 29 29 29H8C6.60761 29 5.27226 28.4469 4.28769 27.4623C3.30312 26.4777 2.75 25.1424 2.75 23.75V20.25Z" stroke={`${tabIndex === 1 ? "white" : "#F72D57"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.5018 8H18.5M18.5 1C10.4098 1 3.74401 4.073 2.85151 11.5C2.73601 12.4625 3.53401 13.25 4.50001 13.25H32.5C33.466 13.25 34.264 12.4625 34.1485 11.5C33.256 4.073 26.5903 1 18.5 1ZM9.75176 8H9.75001H9.75176ZM23.7518 6.25H23.75H23.7518Z" stroke={`${tabIndex === 1 ? "white" : "#F72D57"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Burgers</h3>
                        </Tab>
                        {/* Salads tab */}
                        <Tab className={`${tabIndex === 2 ? 'active-tab' : 'inactive-tabs'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <path d="M10.7691 6.19732C11.4423 4.95272 12.4472 3.91903 13.6723 3.211C14.8974 2.50298 16.2947 2.14832 17.7091 2.18639C19.1236 2.22446 20.4998 2.65378 21.685 3.42668C22.8702 4.19958 23.8181 5.28583 24.4234 6.56485C22.8301 6.60102 21.2818 7.10045 19.9676 8.00214C18.6535 8.90383 17.6303 10.1688 17.0231 11.6424C16.4636 10.7094 15.793 9.84775 15.0259 9.07628C13.7934 7.86626 12.3509 6.8907 10.7691 6.19732ZM32.795 15.3133C32.9196 13.4462 32.4026 11.5926 31.3297 10.0596C30.2567 8.52658 28.6921 7.40625 26.8953 6.88425C26.3057 5.01622 25.1725 3.36645 23.6405 2.14583C22.1085 0.925209 20.2474 0.189182 18.295 0.0318315C16.3426 -0.125518 14.3876 0.302957 12.68 1.26249C10.9723 2.22202 9.58954 3.66902 8.70844 5.41852C7.8382 5.148 6.95202 4.93173 6.055 4.77097C4.53772 4.49789 2.9985 4.36534 1.45687 4.37501C1.32265 4.37745 1.18847 4.38183 1.05438 4.38813H1.04562C0.778208 4.40423 0.525948 4.51772 0.336514 4.70717C0.147079 4.89662 0.0335927 5.1489 0.0174998 5.41633V5.41852C-0.000598486 5.9091 -0.00132795 6.40018 0.0153124 6.89081C0.0437499 7.78556 0.137812 9.02815 0.391562 10.4326C0.660625 11.9246 1.11563 13.6354 1.89 15.3111H1.09375C0.803669 15.3111 0.52547 15.4263 0.320352 15.6315C0.115234 15.8366 0 16.1148 0 16.4049V17.4988C0 22.1404 1.84374 26.5919 5.12563 29.874C8.40752 33.1561 12.8587 35 17.5 35C22.1413 35 26.5925 33.1561 29.8744 29.874C33.1563 26.5919 35 22.1404 35 17.4988V16.4049C35 16.1148 34.8848 15.8366 34.6796 15.6315C34.4745 15.4263 34.1963 15.3111 33.9062 15.3111H32.795V15.3133ZM4.34 15.3133C3.39062 13.6025 2.84812 11.7277 2.54625 10.0454C2.33965 8.89668 2.22118 7.73383 2.19188 6.56704L2.44125 6.57579C3.255 6.60423 4.38813 6.69173 5.66563 6.92363C8.24687 7.3896 11.2787 8.42217 13.4794 10.623C14.8269 11.9705 15.7391 13.6332 16.3516 15.3133H12.4862L8.43062 11.2574C8.32893 11.1558 8.20823 11.0753 8.07542 11.0204C7.94261 10.9655 7.80028 10.9373 7.65657 10.9374C7.51286 10.9375 7.37057 10.9659 7.23784 11.021C7.1051 11.0761 6.98452 11.1568 6.88297 11.2585C6.78142 11.3602 6.7009 11.4809 6.64599 11.6137C6.59109 11.7465 6.56288 11.8889 6.56298 12.0326C6.56309 12.1763 6.59149 12.3186 6.64658 12.4513C6.70168 12.5841 6.78237 12.7047 6.88406 12.8062L9.39313 15.3133H4.34ZM18.6637 15.3133C18.6444 15.2541 18.6247 15.195 18.6047 15.1361C18.5571 14.3108 18.6801 13.4845 18.966 12.7088C19.2519 11.9331 19.6946 11.2247 20.2665 10.6278C20.8384 10.0308 21.5271 9.55814 22.2898 9.23924C23.0524 8.92033 23.8726 8.76205 24.6992 8.77425C25.5257 8.78646 26.3409 8.9689 27.0938 9.31019C27.8467 9.65147 28.5212 10.1443 29.0752 10.7579C29.6292 11.3714 30.0507 12.0926 30.3136 12.8764C30.5765 13.6602 30.6751 14.4897 30.6031 15.3133H18.6659H18.6637ZM2.1875 17.5009H32.8125C32.8125 19.0214 32.5916 20.4893 32.1781 21.8763H2.82187C2.39994 20.4562 2.18626 18.9824 2.1875 17.5009ZM17.5 32.8145C14.6018 32.8151 11.7629 31.9932 9.3133 30.4441C6.8637 28.8951 4.90397 26.6827 3.66188 24.0639H31.3381C30.096 26.6827 28.1363 28.8951 25.6867 30.4441C23.2371 31.9932 20.3982 32.8151 17.5 32.8145Z" fill={`${tabIndex === 2 ? "white" : "#F72D57"}`} />
                            </svg>
                            <h3>Salads</h3>
                        </Tab>
                        {/* Combos tab */}
                        <Tab className={`${tabIndex === 3 ? 'active-tab' : 'inactive-tabs'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="35" viewBox="0 0 48 35" fill="none">
                                <path d="M29 34H40.4409C41.1039 34 41.7424 33.7761 42.2284 33.3732C42.7144 32.9703 43.012 32.4182 43.0615 31.8275L46 7" stroke={`${tabIndex === 3 ? "white" : "#F72D57"}`} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M38 7L39.2698 2.2L43 1" stroke={`${tabIndex === 3 ? "white" : "#F72D57"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26 7L47 7" stroke={`${tabIndex === 3 ? "white" : "#F72D57"}`} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M23.75 25.25L29.6632 19.3368C30.008 18.9921 30.4173 18.7187 30.8677 18.5323C31.3181 18.3458 31.8008 18.2499 32.2882 18.25H32.5C33.4283 18.25 34.3185 18.6187 34.9749 19.2751C35.6313 19.9315 36 20.8217 36 21.75C36 22.6783 35.6313 23.5685 34.9749 24.2249C34.3185 24.8813 33.4283 25.25 32.5 25.25H4.5C3.57174 25.25 2.6815 24.8813 2.02513 24.2249C1.36875 23.5685 1 22.6783 1 21.75C1 20.8217 1.36875 19.9315 2.02513 19.2751C2.6815 18.6187 3.57174 18.25 4.5 18.25H12.4013C15.1855 18.2501 17.8558 19.3561 19.8247 21.3247L23.75 25.25ZM2.75 25.25H34.25V28.75C34.25 30.1424 33.6969 31.4777 32.7123 32.4623C31.7277 33.4469 30.3924 34 29 34H8C6.60761 34 5.27226 33.4469 4.28769 32.4623C3.30312 31.4777 2.75 30.1424 2.75 28.75V25.25Z" stroke={`${tabIndex === 3 ? "white" : "#F72D57"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.5017 13H18.5M18.5 6C10.4097 6 3.74398 9.073 2.85148 16.5C2.73598 17.4625 3.53398 18.25 4.49998 18.25H32.5C33.466 18.25 34.264 17.4625 34.1485 16.5C33.256 9.073 26.5902 6 18.5 6ZM9.75173 13H9.74998H9.75173ZM23.7517 11.25H23.75H23.7517Z" stroke={`${tabIndex === 3 ? "white" : "#F72D57"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Combos</h3>
                        </Tab>

                    </TabList>


                    {/* Tab panel data */}
                    <TabPanel>
                        <SwiperSlider foods={pizzas}></SwiperSlider>
                    </TabPanel>
                    <TabPanel>
                        <SwiperSlider foods={burgers}></SwiperSlider>
                    </TabPanel>
                    <TabPanel>
                        <SwiperSlider foods={salads}></SwiperSlider>
                    </TabPanel>
                    <TabPanel>
                        <SwiperSlider foods={combos}></SwiperSlider>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default PopularCategoires;
const foodItem= [
    {
    id: 1,
    name: 'Plain Dosa',
    category : 'south-indian',
    rating : 4.3,
    price: 13,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fcN1XL7s3olWFxUiOu_a1vnorMZ1zbioLg&usqp=CAU',
    quantity: 1
},
{
    id: 2,
    name: 'Idli',
    category : 'south-indian',
    rating : 4.3,
    price: 15,
    img: 'https://images.indianexpress.com/2020/02/idli_759.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Masala Dosa',
    category : 'south-indian',
    rating : 4.3,
    price: 18,
    img: 'https://vismaifood.com/storage/app/uploads/public/fc8/6e9/476/thumb__700_0_0_0_auto.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Aloo Bonda',
    category : 'south-indian',
    rating : 4.3,
    price: 15,
    img: 'https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_800/https://rasamtales.com/wp-content/uploads/2019/09/bonda-recipes-toi.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Onion Uthappam',
    category : 'south-indian',
    rating : 4.3,
    price: 10,
    img: 'https://4.bp.blogspot.com/-LjOW42OUvWc/Wo_7biGkv8I/AAAAAAAAwiA/v7oVa7aMDZkqlLjsoq41YcP-94v0aOtpQCLcBGAs/s1600/onion-uthappam.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Parippu Vada',
    category : 'south-indian',
    rating : 4.3,
    price: 12,
    img: 'https://cdn.pixabay.com/photo/2021/06/03/01/37/parippu-vada-6305691_960_720.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Veg Soup',
    category : 'soup',
    rating : 4.3,
    price: 11,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9eSsyaZ1VvePtQshxvy74uuxNfBgQhmRT22qMZUQ5-OTvrWjxSktQj-_ZC-a6gIPvYs&usqp=CAU',
    quantity: 1
},
{
    id: 8,
    name: 'Tomato Soup',
    category : 'soup',
    rating : 4.3,
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8mm6mJBP9WVqqikrc9Dlb1-IJx4bJsTLQkYeqz1LdAgblcgtbxu6Cx3GheKGNXvz2G8&usqp=CAU',
    quantity: 1
},
{
    id: 9,
    name: 'Mushroom Soup',
    category : 'soup',
    rating : 4.3,
    price: 14,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3INSqi1VzeT0s3rgKJJWypPuGRAfQbVMMIgr070inms6LqF4zkiwcqceKYlVOwwInqaE&usqp=CAU',
    quantity: 1
},
{
    id: 10,
    name: 'Hot n Sour',
    category : 'soup',
    rating : 4.3,
    price: 12,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz6da7shw1vKrRrByBip2tykovVD4_CA1lcCLVCgtiUQGUscW8Vg2OwwvebuC62iAtTw&usqp=CAU',
    quantity: 1
},
{
    id: 11,
    name: 'Ramen Noodle Soup',
    category : 'soup',
    rating : 4.3,
    price: 17,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhpfV0rjJpOXziwX-uWEF8iAumWCj5jM7UbyIjfqgGXQ9Qd4sPmu_Lw9g_1-7ce8Cfek&usqp=CAU',
    quantity: 1
},
{
    id: 12,
    name: 'Aloo Paratha',
    category : 'chappati',
    rating : 4.3,
    price: 13,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehkNgRkzKcH3bMQNirVGnfg10idieIHUH80x5pl7GB2yaax5O_RPqPEkpJeysHXf6R4c&usqp=CAU',
    quantity: 1
},
{
    id: 13,
    name: 'Paneer Paratha',
    category : 'chappati',
    rating : 4.3,
    price: 20,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOxzz13AcGmhhMtiMkOu6zSYzbF9-tmd8JmBV2yjtYp6KkWybdISsaaBsORzWPgonLHA&usqp=CAU',
    quantity: 1
},
{
    id: 14,
    name: 'Roti Phulka',
    category : 'chappati',
    rating : 4.3,
    price: 15,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07DCvbXBttElwmxlcqhOKhotl0glQfWELoqvIsMASzYrEsVwpiaM67IbEIiQKDhTYgcQ&usqp=CAU',
    quantity: 1
},
{
    id: 15,
    name: 'Butter Naan',
    category : 'chappati',
    rating : 4.3,
    price: 20,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbM0bdCCADKB0ejQD70I7UKKbrzhERuVUG4zU0HRERgfs70MZXR3IGO6xCrYin0zF_W8&usqp=CAU',
    quantity: 1
},
{
    id: 16,
    name: 'Tandoori Roti',
    category : 'chappati',
    rating : 4.3,
    price: 20,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAg7q0w-HE7rZUHJPOLMgRSUewTBFBF66c1kNZzlbpVOTS35fxXIlPPgej_v4yQTazmLQ&usqp=CAU',
    quantity: 1
},
{
    id: 17,
    name: 'Plain Paratha',
    category : 'chappati',
    rating : 4.3,
    price: 20,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxjPWxVeGVahDDS2NkZan7iPNCq2wQhvLKknhmRthNSHP1D73yAqb0bBb0VJVxskkFO4&usqp=CAU',
    quantity: 1
},
{
    id: 18,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpB_Doh1jHCTzc5_oOhusQpr7ynuY-uNmzgA&usqp=CAU',
    quantity: 1
},
{
    id: 19,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRme5gAX9vynRFuiAcDnUEV8nuv5D60bgt_yQ&usqp=CAU',
    quantity: 1
},
{
    id: 20,
    name: 'Veg Kolhapuri',
    category : 'vegetable',
    rating : 4.3,
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzB-hLO2YsYhvZPRBRYe9jEdElJXhQAnryw&usqp=CAU',
    quantity: 1
},
{
    id: 21,
    name: 'Veg Butter Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHVeARd5tO4jstBWw412hzgOI8BjCqYiiqsFMVbJ3KmIpKOmPsSj6YPfNlukAC77QnhI&usqp=CAU',
    quantity: 1
},
{
    id: 22,
    name: 'Malai Kofta',
    category : 'vegetable',
    rating : 4.3,
    price: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0TjRAtyGPIry5ahsVQHBeoz1wJTrs-YLVkHBEcGJ68dHOeKMsLd3rdb8QD-iVdjtigw&usqp=CAU',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/navratan-korma.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi3l1vVOQVkC3Ipqp1ribUXYvlMZPLcAT3A&usqp=CAU',
    quantity: 1

},
{
    id: 25,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_DiTDlIMrrunji-AQ9P-qyK445J27gkTtQ&usqp=CAU',
    quantity: 1
},
{
    id: 26,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJrHBA7zt8qZ4oMVJTpMpPkuVtA6INd61Ykv-cUGi40fE8BSfrvvUjZ_bR_1vmGzt3l8&usqp=CAU',
    quantity: 1

},
{
    id: 27,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.3,
    price: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWbjN0L8SseMl5JfXJIFpfY_s4why9bK7AqxH0-OAnNzSdPH-3k0lKRwLsqRJznD6z5M&usqp=CAU',
    quantity: 1
},
{
    id: 28,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjVfIJgs0xiO8gB-E4J5x5YjbQtOj7RnAjQ&usqp=CAU',
    quantity: 1
},
{
    id: 29,
    name: 'Steamed Momos',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Uh4okE7Jvl7DURKxc6gB1P46Vx1mRqPKw4DZXVfTIFku-TLdjrIVfhU7XfUpNbnrNAY&usqp=CAU',
    quantity: 1
},
{
    id: 30,
    name: 'Chowmein',
    category : 'chinese',
    rating : 4.3,
    price: 16,
    img: 'https://greenbowl2soul.com/wp-content/uploads/2019/11/vegetable-chow-mein-500x500.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 14,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BDCLt4pX87cq43eiVrnlb8fOZIpXJUMHRg&usqp=CAU',
    quantity: 1
},
{
    id: 32,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cwS4RVE9aquJu0r2osILVXCXzMQP-S7MA7mDCbbTD3HzfpbXT2utXRk3i2VM5uPjMWY&usqp=CAU',
    quantity: 1
},
{
    id: 33,
    name: 'Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6-cSOlciabT59oEDk5ogHpqR3uZhbXd9CpsPkwUlRgURVRp7SH-dRtxoGZ6gh_41fxc&usqp=CAU',
    quantity: 1
},
{
    id: 34,
    name: 'Jalebi with Rabri',
    category : 'dessert',
    rating : 4.3,
    price: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST43-X8dhzoJHnXugJswG7rhTUumZatCXXXWFqFbn7dMau8ygWw-eui_RRxuTE-AA4Vjg&usqp=CAU',
    quantity: 1
},
{
    id: 35,
    name: 'Ras Malai',
    category : 'dessert',
    rating : 4.3,
    price: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO3Ia7l8Q2MDcr4jO8Rx8mxHfbcR9n2achcP6CVNaaXfR6bL3edXNiyES1IBi4PJGyg0&usqp=CAU',
    quantity: 1
},
{
    id: 36,
    name: 'Gulab Jamun',
    category : 'dessert',
    rating : 4.3,
    price: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYa6YSO1Wn97fXmPPeVv38WdeEZVg9iBY7aUURQxFjRYJ18AHn3bl-DZWIIhkMia-DaDg&usqp=CAU',
    quantity: 1
},
{
    id: 37,
    name: 'Rasgulla',
    category : 'dessert',
    rating : 4.3,
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ntRX_CTVUDKnmS_Zfe-6JgLpAcN5bFPQ13w-7A9ort4sI8okemuos1sGZ2TFi3LW_VM&usqp=CAU',
    quantity: 1
},
{
    id: 38,
    name: 'Malai Chop',
    category : 'dessert',
    rating : 4.3,
    price: 18,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9reEEyWOhBzh4Gpxz1n8En2fRSSnOLExLrEUa2Hpj-cLb56c1JvEb4J8Ld24w3UzfF8&usqp=CAU',
    quantity: 1
}
/*{
    id: 34,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/paneer-butter-masala.jpg',
    quantity: 1

},
{
    id: 38,
    name: 'Idli',
    category : 'chappati',
    rating : 4.3,
    price: 20,
    img: 'images/south indian/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'chappati',
    rating : 4.3,
    price: 12,
    img: 'images/south indian/masala-dosa.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'chappati',
    rating : 4.3,
    price: 10,
    img: 'images/south indian/mysore-bonda.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'chappati',
    rating : 4.3,
    price: 15,
    img: 'images/south indian/onion-uttapam.jpg',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'chappati',
    rating : 4.3,
    price: 40,
    img: 'images/south indian/plain-dosa.jpeg',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'chappati',
    rating : 4.3,
    price: 25,
    img: 'images/south indian/Rava-Uttapam.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'chappati',
    rating : 4.3,
    price: 34,
    img: 'images/south indian/sambhar-vada.jpg',
    quantity: 1
},*/
]

export {foodItem};
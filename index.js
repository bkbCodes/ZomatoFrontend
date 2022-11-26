function showOptions(e) {
    const event = e.parentNode;
    const list_style_option = [
        {
            check: "Popular cuisines",
            item_list: ["Bakery food near me", "Beverages food near me", "Biryani food near me", "Burger food near me", "Chinese food near me", "Desserts food near me", "Ice Cream food near me", "Kebab food near me", "Mithai food near me", "Momos food near me", "Mughlai food near me", "North Indian food near me", "Pasta food near me", "Pizza food near me", "Rolls food near me", "Sandwich food near me", "Shake food near me", "Sichuan food near me", "South Indian food near me", "Street food near me"]
        },
        {
            check: "Popular restaurant",
            item_list: ["Bakeries near me", "Bars near me", "Beverage Shops near me", "Bhojanalya near me", "Cafés near me", "Casual Dining near me", "Clubs near me", "Cocktail Bars near me", "Confectioneries near me", "Dessert Parlors near me", "Dhabas near me", "Fine Dining near me", "Food Courts near me", "Food Trucks near me", "Irani Cafes near me", "Kiosks near me", "Lounges near me", "Meat Shops near me", "Microbreweries near me", "Paan Shop near me", "Pop Ups near me", "Pubs near me", "Quick Bites near me", "Sweet Shops near me"]
        }
    ]
    const grid_style_option = [
        {
            check: "Top Restaurant",
            item_list: ["Bikanervala","Biryani Blues","BTW","Burger King","Burger Singh","Domino's","Dunkin' Donuts","Haldiram's","KFC","Krispy Kreme","McDonald's","Moti Mahal Delux","Om Sweets & Snacks","Paradise Biryani","Pizza Hut"]
        },
        {
            check: "Cities",
            item_list: ["Delhi NCR","Kolkata","Mumbai","Bengaluru","Pune","Hyderabad","Chennai","Lucknow","Kochi","Jaipur","Ahmedabad","Chandigarh","Goa","Indore","Gangtok","Nashik","Ooty","Shimla","Ludhiana","Guwahati","Amritsar","Kanpur","Allahabad","Aurangabad","Bhopal","Ranchi","Visakhapatnam","Bhubaneswar","Coimbatore","Mangalore","Vadodara","Nagpur","Agra","Dehradun","Mysore","Puducherry","Surat","Varanasi","Patna","Udaipur","Khajuraho","Neemrana","Cuttack","Trivandrum","Haridwar","Leh","Pushkar","Rajkot","Madurai","Kozhikode","Alappuzha","Thrissur","Manipal","Vijayawada","Jodhpur","Kota","Ajmer","Mussoorie","Rishikesh","Jalandhar","Jammu","Manali","Dharamshala","Raipur"]
        }
    ]

    if (event.children[0].children[1].className.includes("i-clicked")) {
        event.children[0].children[1].classList.remove("i-clicked");
        event.children[1].style = "display: none";
    }
    else {
        event.children[0].children[1].className += " i-clicked";
        if(event.children[1].className.includes("list-style"))
            event.children[1].style = "display: block";
        else
            event.children[1].style = "display: grid";
    }

    if (event.children[1].children.length == 0) {
        list_style_option.forEach((ele) => {
            if (event.children[0].children[0].textContent.includes(ele.check)) {
                ele.item_list.forEach((val, ind) => {
                    if (ind != 0) {
                        let dot = document.createElement("i")
                        dot.className = "dot";
                        event.children[1].append(dot);
                    }

                    let link = document.createElement("a");
                    link.textContent = val;
                    event.children[1].append(link)
                })
            }
        })
        grid_style_option.forEach((ele) => {
            if (event.children[0].children[0].textContent.includes(ele.check)) {
                ele.item_list.forEach((val, ind) => {
                    let link = document.createElement("a");
                    link.textContent = val;
                    event.children[1].append(link)
                })
                if(event.children[0].children[0].textContent.includes(grid_style_option[1].check)){
                    let link = document.createElement("a");
                    link.textContent = "See more";
                    link.className = "see-more";
                    event.children[1].append(link)
                }
            }

        })
    }
}
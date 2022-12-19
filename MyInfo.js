// [] = list  {} = object
// No problem if the list is inside the object or vice versa
let Personal_info = [
    basic = {
        "name":"omar",
        "age":25,
        "major":"cs",
        "job":"it support"
    },
    contact_info = {
        "github":"https://github.com/omar-alajlouni",
        "youtube":"https://www.youtube.com/@Black.Hole7",
        "phone":["+962", 796120662, 790941602],
        location: {
            "country": "jordan",
            "city":"irbid",
            "long_lat":[32.539692, 35.864255]
        }//location oject inside cintact_info object
    }//basic object and contact_info object inside the list Personal_info
]//Personal_info list
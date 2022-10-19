let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
        {
        "id": 2,
        "name":"Hospital B",
        "location":"Pune",
        "noOfBeds":150,
        "availability":"No"
        },
        {
            "id": 3,
            "name":"Hospital C",
            "location":"Pune",
            "noOfBeds":350,
            "availability":"Yes"
            }
]
/* 
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune
*/
            beds=hospitals.filter(availablebeds=>availablebeds.noOfBeds>200)
            console.log("List of Hospitals where Number of Beds > 200 :",beds)
            Availbeds=hospitals.filter(bed=>bed.availability=='Yes')
            console.log("-----------------------------------------------")
            console.log("List of Hospitals where Availability of Beds = Yes :",Availbeds)
            console.log("-----------------------------------------------")
           
            locationofhosp=hospitals.filter(loc=>loc.location=="Pune")
            console.log("-----------------------------------------------")
           
        
            console.log("List of hospitals where location=Pune",locationofhosp)
        

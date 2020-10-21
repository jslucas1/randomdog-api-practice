function getDog(){
    const randomDogApiUrl = "https://api.thedogapi.com/v1/images/search";

    fetch(randomDogApiUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log("should have the json");
        console.log(json);
        const imageUrl = json[0].url;
        const breedData = json[0].breeds[0];
        var weight; var breed; var lifeSpan;
        try{
            weight = breedData.weight.imperial;
        }
        catch{
            weight = "unknown";
        }
        try{
            breed = breedData.name;
        }
        catch{
            breed = "unknown";
        }
        try{
            lifeSpan = breedData.life_span;
        }
        catch{
            lifeSpan = "unknown";
        }
     
        var html = "<img src=\""+imageUrl+"\" alt=\""+breed+" image\" style=\"width:100%\"></img>";
        html += "<div class=\"container\">";
        html += "<div><p><b>Breed : </b>" + breed + "</p>";
        html += "<p><b> Normal Weight : </b> " + weight + " pounds</p>";
        html += "<p><b>Normal Lifespan : </b>" + lifeSpan + " years</p>";
        html += "</div>";
        document.getElementById("dogImage").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
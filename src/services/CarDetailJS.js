function CarDetailJS(){
    document.addEventListener("click", function() {
        var radios = document.getElementsByClassName('Car_Detail_Sub_Trim_Radio');
    
        for (var i = 0; i < radios.length; i++) {
            radios[i].addEventListener("click", function(event) {
                var clickedRadio = event.target;
                
                // Loop through each radio button
                for (var j = 0; j < radios.length; j++) {
                    // Uncheck the radio button if it's not the one that was clicked
                    if (radios[j] !== clickedRadio) {
                        radios[j].checked = false;
                    }
                }
            });
        }
    });
}
export default CarDetailJS;
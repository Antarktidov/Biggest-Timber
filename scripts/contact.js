const generalContactForm = document.querySelector(".general-contact-form");
        function doSomething() {
            const option = document.querySelector(".how-can-we-help-you-select");
                if ( option.selectedIndex === 1) {
                    generalContactForm.style.display = "unset";
                } else {
                    generalContactForm.style.display = "none";
                }
        }
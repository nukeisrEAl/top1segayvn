function yes()
        {
            yess = document.getElementById('receiveemail')
            if(f.yestohidden.checked==true)
            {
                yess.hidden = false
            }
            else { yess.hidden = true }
        }

function billtoDelivery()
        {
            if(f.usebilladdress.checked==true)
            {
            f.FirstNameDelivery.value = f.FirstNameBill.value
                f.LastNameDelivery.value = f.LastNameBill.value
                f.CompanyNameDelivery.value = f.CompanyNameBill.value
                f.AddressLine1Delivery.value = f.AddressLine1Bill.value
                f.AddressLine2Delivery.value = f.AddressLine2Bill.value
                f.CityDelivery.value = f.CityBill.value
                f.StateDelivery.value = f.StateBill.value
                f.ZipCodeDelivery.value = f.ZipCodeBill.value
                f.PhoneNumberDelivery.value = f.PhoneNumberBill.value
                f.ExtensionDelivery.value = f.ExtensionBill.value
            }
            else
            {
                f.FirstNameDelivery.value = ""
                f.LastNameDelivery.value = ""
                f.CompanyNameDelivery.value = ""
                f.AddressLine1Delivery.value = ""
                f.AddressLine2Delivery.value = ""
                f.CityDelivery.value = ""
                f.StateDelivery.value = ""
                f.ZipCodeDelivery.value = ""
                f.PhoneNumberDelivery.value = ""
                f.ExtensionDelivery.value = ""
            }
        }
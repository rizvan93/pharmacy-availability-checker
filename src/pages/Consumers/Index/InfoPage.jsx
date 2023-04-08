import { useEffect } from "react"

import NoPharmacist__MedicineAvailable from "../../../assets/mapIcons/NoPharmacist__MedicineAvailable.png"
import NoPharmacist__MedicineLow from "../../../assets/mapIcons/NoPharmacist__MedicineLow.png"
import NoPharmacist_NoMedicine from "../../../assets/mapIcons/NoPharmacist_NoMedicine.png"
import Pharmacist_MedicineAvailable from "../../../assets/mapIcons/Pharmacist_MedicineAvailable.png"
import PharmacistAvailable__MedicineLow from "../../../assets/mapIcons/PharmacistAvailable__MedicineLow.png"
import PharmacistAvailable__NoMedicine from "../../../assets/mapIcons/PharmacistAvailable__NoMedicine.png"
import PharmacistAvailable from "../../../assets/mapIcons/PharmacistAvailable.png"
import PharmacistNotAvailable from "../../../assets/mapIcons/PharmacistNotAvailable.png"

import available from "../../../assets/availabilityIcons/available.png"
import low from "../../../assets/availabilityIcons/low.png"
import none from "../../../assets/availabilityIcons/none.png"

import bookmark from "../../../assets/buttonIcons/bookmark.png"

export default function InfoPage({setHome}) {

    useEffect(() => {
    setHome(false);
    }, []);

    return (
        <>
        <div className="justify-center p-4">
    
        <p className="font-semibold pb-2">What is Watsons Pharmacy+?</p>
    
        <p>The Watsons Pharmacy+ (W+) App aims to let you know if the pharmacist is not present and the medicine you need is out of stock so that you can plan your pharmacy visit accordingly. 
        <br />
        The W+ App offers real-time information on: 
        <br/>
        1. The availability of our pharmacists
        <br />
        2. The availability of medicine at our pharmacies
        <br/></p>
    
        <p className="font-semibold py-2">How to find out the availability of our pharmacists and medicine?</p>
    
        <p>The W+ App allows you to find out our pharmacists’ availability and medicine stock in real-time for all our outlets that offer pharmacy services in Singapore. 
        <br/>
        The W+ map displays the locations of our pharmacies by applying the following graphic system:
        <br/></p>
    
    <p className="font-semibold py-2">Pharmacist availability</p>
    
    <table>
    <tbody>
    <tr>
    <td><img src={PharmacistAvailable} width="50"/></td>
    <td>Pharmacist available</td>
    </tr>

    <tr>
    <td><img src={PharmacistNotAvailable} width="50"/></td>
    <td>Pharmacist N/A (not available)</td>
    </tr>
    </tbody>
    </table>

    
    <p className="font-semibold py-2">Pharmacist and medicine availability</p>
    <table>
    <tbody>
    <tr>
    <td><img src={Pharmacist_MedicineAvailable} width="50"/></td>
    <td>Pharmacist available + medicine in stock</td>
    </tr>

    <tr>
    <td><img src={NoPharmacist__MedicineAvailable} width="50"/></td>
    <td>Pharmacist N/A (not available) + medicine in stock</td>
    </tr>

    <tr>
    <td><img src={PharmacistAvailable__MedicineLow} width="50"/></td>
    <td>Pharmacist available + medicine low in stock</td>
    </tr>

    <tr>
    <td><img src={NoPharmacist__MedicineLow} width="50"/></td>
    <td>Pharmacist N/A (not available) + medicine low in stock</td>
    </tr>

    <tr>
    <td><img src={PharmacistAvailable__NoMedicine} width="50"/></td>
    <td>Pharmacist available + medicine out of stock</td>
    </tr>

    <tr>
    <td><img src={NoPharmacist_NoMedicine} width="50"/></td>
    <td>Pharmacist N/A (not available) + medicine out of stock</td>
    </tr>
    </tbody>
    </table>
    
    <p className="font-semibold py-2">Colour meaning</p>
    <table>
    <tbody>
    <tr>
    <td><img src={available} /></td>
    <td>Available / in stock</td>
    </tr>
    
    <tr>
    <td><img src={low} /></td>
    <td>Low in stock</td>
    </tr>

    <tr>
    <td><img src={none}/></td>
    <td>N/A (not available) / out in stock</td>
    </tr>
    </tbody>
    </table>
    
    <p className="font-semibold py-2">Notes on availability</p>
    
    <p>Availability is indicative only—check with our pharmacist for actual stock.</p>
    <p>This does not reserve the medicine or guarantee it will still be in stock when you visit our pharmacy.</p>
    <p>You can only search for one item at a time </p>
    
    <p className="font-semibold py-2">Bookmarking your medicine</p>
    <p>Our current version of the W+ App allows you to check our stock on medicine at a time.</p> 
    <p>To compile a list of more than one medicine, you can bookmark the medicine you need (at its chosen location) by clicking on the following icon: 
    <img src={bookmark}/>Click to bookmark your medicine</p>
    <p>Clicking on the bookmark symbol will compile a list of all the medicines you need in the Bookmark section, accessible via the bottom-right of the W+ App.</p>
    </div>
   </>
   )
    }
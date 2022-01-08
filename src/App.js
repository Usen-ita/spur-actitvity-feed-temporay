import Button from './Components/Button'
import HomeButton from './Components/HomeButton';
import './index.css'
import FriendsButton from './Components/FriendsButton';
import Share from './Components/share/Share';

var Friends_move = false;
const SelectedFilter = []

const Friends_Click = () => {
    let element = document.getElementById("f_move")
    if (Friends_move === false){
        element.style.marginLeft = 500+"px"
        element.style.transition = "all 0.5s ease"
        Friends_move = true
    } else if (Friends_move === true){
        for(let i = 500; i > 0; i--) {
            element.style.marginLeft = i*0.5+"px"
        }
        Friends_move = false
    }
}

const Filter_ClickOpen = () => {
        let element = document.getElementById("filter_Open")
        element.style.marginLeft = -90+"vw"
        element.style.transition = "all 0.5s ease"
}

const Filter_ClickClose = () => {
        let element = document.getElementById("filter_Open")
        element.style.marginLeft = 100+"vw"
        element.style.transition = "all 0.5s ease"
}

function checkIfAdded(element) {
        var found = false
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(element.value === SelectedFilter[counter]){
                        alert("Already in")
                        found = true
                } else if(found === false && counter === SelectedFilter.length-1){
                        alert("not found")
                }
        }
        return(found)
}

function readList(){
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                alert("Place in array: " + (counter + 1)+ ": " + SelectedFilter[counter])
        }
}

const addToText = () => {

}

const ButtonClicked1 = () => {
        var found = false
        let element = document.getElementById("button1")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

const ButtonClicked2 = () => {
        var found = false
        let element = document.getElementById("button2")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked3(){
        var found = false
        let element = document.getElementById("button3")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked4(){
        var found = false
        let element = document.getElementById("button4")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked5(){
        var found = false
        let element = document.getElementById("button5")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked6(){
        var found = false
        let element = document.getElementById("button6")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked7(){
        var found = false
        let element = document.getElementById("button7")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked8(){
        var found = false
        let element = document.getElementById("button8")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked9(){
        var found = false
        let element = document.getElementById("button9")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked10(){
        var found = false
        let element = document.getElementById("button10")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked11(){
        var found = false
        let element = document.getElementById("button11")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked12(){
        var found = false
        let element = document.getElementById("button2")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked13(){
        var found = false
        let element = document.getElementById("button13")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked14(){
        var found = false
        let element = document.getElementById("button14")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked15(){
        var found = false
        let element = document.getElementById("button15")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked16(){
        var found = false
        let element = document.getElementById("button16")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

function ButtonClicked17(){
        var found = false
        let element = document.getElementById("button17")
        for(let counter = 0; counter < SelectedFilter.length; counter++){
                if(SelectedFilter[counter].value === element.value){
                        found = true
                }
        }

        if(checkIfAdded(element) === false){
                SelectedFilter.push(element.value)
                alert("Element added")
        }
        // Try to update teh total filters selected
        readList()
}

const SendPost = () => {
        let element = document.getElementById("textComponent")
        element.value = "done"
}

function App() {
  return (
    <>
    <div className="NavigationButtons">
      <div className="wrapper">
            <div className="sidebar">
                <ul>
                    <li> 
                            <HomeButton text="Spur"/>
                    </li>
                    <li>
                            <Button text='My Profile'/>
                    </li>
                    <li>
                            <Button text='Activity Feed' active={true}/>
                    </li>
                    <li>
                            <button id='FriendsButtonID' onClick={Friends_Click} className='btn'>Toggle Friends List</button>
                    </li>
                    <li>
                            <button id='FilterButtonID' onClick={Filter_ClickOpen} className='btn'>Show Filter List</button>
                    </li>
                    <li>
                            <Button text='Settings'/>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div id = "f_move" className = "Friends Panel">
        <div className="friendsWrapper">
            <div className="friends">
                <ul>
                    <li> 
                        <HomeButton text="Friends"/>
                    </li>
                    <li>
                            <Button text='Friend x'/>
                    </li>
                    <li>
                            <Button text='Friend x'/>
                    </li>
                    <li>
                            <Button text='Friend x'/>
                    </li>
                    <li>
                            <Button text='Friend x'/>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className = "Feed">
        <div className = "DisplayArea">
            <h1>Content Goes Here</h1>
        </div>
    </div>

    <div className = "PostSection">
        <div className="container">
       <Share/>
        </div>
    </div>

    <div id = "filter_Open" className = "Filter">
        <div className="filterWrapper">
            <div className="filter">
                <ul>
                    <li> 
                        <textarea disabled className='textArea'>{}</textarea>    
                        <FriendsButton text="Filters"/>
                        <button onClick={Filter_ClickClose} className='closeBtn'>Close</button>
                    </li>
                    <li>
                        <button id='button1' onClick={ButtonClicked1} className='Filter_btn' value="No Poverty">No Poverty</button>
                    </li>
                    <li>
                        <button id='button2' onClick={ButtonClicked2} className='Filter_btn' value="Zero Hunger">Zero Hunger</button>
                    </li>
                    <li>
                        <button id='button3' onClick={ButtonClicked3} className='Filter_btn' value="Good Health and Well-Being">Good Health and Well-Being</button>
                    </li>
                    <li>
                        <button id='button4' onClick={ButtonClicked4} className='Filter_btn' value="Quality Education">Quality Education</button>
                    </li>
                    <li>
                        <button id='button5' onClick={ButtonClicked5} className='Filter_btn' value="Gender Equality">Gender Equality</button>
                    </li>
                    <li>
                        <button id='button6' onClick={ButtonClicked6} className='Filter_btn' value="Clean Water and Sanitation">Clean Water and Sanitation</button>
                    </li>
                    <li>
                        <button id='button7' onClick={ButtonClicked7} className='Filter_btn' value="Affordable and Clean Energy">Affordable and Clean Energy</button>
                    </li>
                    <li>
                        <button id='button8' onClick={ButtonClicked8} className='Filter_btn' value="Decent Work and Economic Growth">Decent Work and Economic Growth</button>
                    </li>
                    <li>
                        <button id='button9' onClick={ButtonClicked9} className='Filter_btn' value="Industry, Innovation and Infrastructure">Industry, Innovation and Infrastructure</button>
                    </li>
                    <li>
                        <button id='button10' onClick={ButtonClicked10} className='Filter_btn' value="Reduced Inequalities">Reduced Inequalities</button>
                    </li>
                    <li>
                        <button id='button11' onClick={ButtonClicked11} className='Filter_btn' value="Sustainable Cities and Communities">Sustainable Cities and Communities</button>
                    </li>
                    <li>
                        <button id='button12' onClick={ButtonClicked12} className='Filter_btn' value="Responsible Consumption and Production">Responsible Consumption and Production</button>
                    </li>
                    <li>
                        <button id='button13' onClick={ButtonClicked13} className='Filter_btn' value="Climate Action">Climate Action</button>
                    </li>
                    <li>
                        <button id='button14' onClick={ButtonClicked14} className='Filter_btn' value="Life Below Water">Life Below Water</button>
                    </li>
                    <li>
                        <button id='button15' onClick={ButtonClicked15} className='Filter_btn' value="Life on Land">Life on Land</button>
                    </li>
                    <li>
                        <button id='button16' onClick={ButtonClicked16} className='Filter_btn' value="Peace, Justice and String Institutions">Peace, Justice and String Institutions</button>
                    </li>
                    <li>
                        <button id='button17' onClick={ButtonClicked17} className='Filter_btn' value="Partnerships For The Goals">Partnerships For The Goals</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;

/* const names = ["Tom", "Jerry", "lukas", "Mia", "Lily", "Max"]; */


/* const nameAmount = names.Lenght;

console.log(nameAmount); */

/* FOR loop */
/* for (let i = 0; i < names.length; i++)
{
    console.log(`hello ${names[i]}`)
} */

/* FOR of loop */
/* for (let name of names)
{
    console.log(`hello ${name}` )
} */


/* While loop */
/* Math.random gir tall mellom 0-1 */

/* const secretNumber = Math.floor(Math.random() * 10) + 1; */


/* Random Number */

/* let guess = 0;
while (guess !== secretNumber)
{
    guess++;
    if (guess === secretNumber)
    {
        console.log(`you number is ${guess}`);
    }
} */


/* Break & Continiue */

/* Continiue Example */

/* for (let i = 0; i < names.length; i++)
{
    if (names[i] === "Jerry")
    {
        continue;
    }
    console.log(`hello ${names[i]}`)
} */


/* Break Example */

/* for (let i = 0; i < names.length; i++)
{
    if (names[i] === "Tom")
    {
        break;
    }
} */


/* skrive en funksjon som tar i mot array av string. funksjonen skal returnere arrayet med alle strings baklengs. arrayet må være lengere enn 10 og mindre en 100 */

/* const stringArrayReverser = (arr) => 
{
    if (arr.length < 3 || arr.length > 100)
        {
            return "Array too short or to long"
        }
        
        const reversedArray =  []
        for (let i = 0; i < arr.length; i++)
        {
            const reversedValue = arr[i].split("").reverse().join("")

            reversedArray.push(reversedValue)
        }
        return reversedArray

};

const reversedNames = stringArrayReverser(names);
console.log(reversedNames);


for (let i = 1; i <= 5; i--) {
    console.log(`Tallet er: ${i}`);
} */

/* ===================================================================================== */

/* Booking Pop Up */
const BookingPopup = document.getElementById("BookingPopup");

/* Open Booking Button */
const OpenCalendarBtn = document.getElementById("OpenBookingBtn");

/* Close Booking Button */
const CloseBookingBtn = document.getElementById("CloseBookingBtn");


/* Open Booking Pop Up */
OpenBookingBtn.addEventListener("click", function()
{
    BookingPopup.showModal();
});


/* Close Calendar Pop Up */
CloseBookingBtn.addEventListener("click", function()
{
    BookingPopup.close();
});

/* ===================================================================================== */

/* Members Button */
const ButtonMembers = document.getElementById("ButtonMembers");

/* Members List */
const MembersList = document.getElementById("MembersList");


/* Show / Hide Members List */
ButtonMembers.addEventListener("click", function()
{
    MembersList.classList.toggle("ShowMembers");
});


/* Close Members List When Clicking Outside */
document.addEventListener("click", function(event)
{
    if (
        !MembersList.contains(event.target) &&
        !ButtonMembers.contains(event.target)
    )
    {
        MembersList.classList.remove("ShowMembers");
    }
});
/* ===================================================================================== */


/* Craftvilla Information */
const CraftVillaInfo = document.getElementById("CraftVillaInfo");

/* Craftvilla Button */
const ButtonCraft = document.getElementById("CraftArticle");


/* Show / Hide Craftvilla Information */
ButtonCraft.addEventListener("click", function()
{
    CraftVillaInfo.classList.toggle("ShowCraft");
});


/* Close Craftvilla Information When Clicking Outside */
document.addEventListener("click", function(event)
{
    if (
        !CraftVillaInfo.contains(event.target) &&
        !ButtonCraft.contains(event.target)
    )
    {
        CraftVillaInfo.classList.remove("ShowCraft");
    }
});

/* ===================================================================================== */

/* Feedback Information */
const FeedbackInfo = document.getElementById("FeedbackInfo");

/* Feedback Button */
const ButtonFeedbacks = document.getElementById("ButtonFeedbacks");


/* Show / Hide Feedback Information */
ButtonFeedbacks.addEventListener("click", function()
{
    FeedbackInfo.classList.toggle("ShowFeedback");
});


/* Close Feedback Information When Clicking Outside */
document.addEventListener("click", function(event)
{
    if (
        !FeedbackInfo.contains(event.target) &&
        !ButtonFeedbacks.contains(event.target)
    )
    {
        FeedbackInfo.classList.remove("ShowFeedback");
    }
});
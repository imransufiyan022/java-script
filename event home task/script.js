const guestName = "   Amina Yusuf   ";
const eventName = "Creative Meetup";
const eventDate = "24 October 2026";
const venue = "Lagos Community Hall";
const activities = "Design,Photography,Writing";
const bookingId = "83";
const ticketPrice = 2500;
const ticketQuantity = 2;


const cleanName = guestName.trim();
console.log(cleanName);
console.log(cleanName.toUpperCase());
console.log(cleanName.toLowerCase());
console.log(cleanName.length);
console.log(cleanName.charAt(0));
console.log(eventName.includes("Meetup"));


console.log(eventName.startsWith("Creative"));
console.log(eventName.endsWith("Meetup"));

console.log(eventName.indexOf("Meetup"));


console.log(eventName.substring(0, 8));

console.log(activities.split(","));


const formattedBookingId = bookingId.padStart(4, "0");
console.log(formattedBookingId);

console.log(bookingId.padEnd(5, "*"));

console.log("See you there! ".repeat(3));

const bookingMessage = "Welcome, " + cleanName +
"! Your booking for " + eventName +" on " + eventDate +" at " + venue +" has been received. We look forward to seeing you!";
console.log(bookingMessage);

const secondMessage = "Welcome ".concat(cleanName,
    "! Your booking for ", eventName, " on ", eventDate, " at ", venue, " has been received. We look forward to seeing you!"
);
console.log(secondMessage);

const bookingSummary = `${cleanName} booked ${ticketQuantity} tickets for ${eventName} on ${eventDate} at ${venue}. The booking ID is ${formattedBookingId}, and the total cost is ₦${ticketPrice * ticketQuantity}.`;

console.log(bookingSummary);

const updatedEventName = eventName.replace("Creative", "Community");

console.log(updatedEventName);
console.log(eventName);
function Speaker (givenName, surname, email, biography) {
    this.givenName = givenName;
    this.surname = surname;
    this.email = email;
    this.biography = biography;
    this.isActive = true;
}
Speaker.prototype.getBiography = function () {
    console.log('Speaker:'+' ' + this.givenName +' '+ this.surname);
    console.log(this.biography);

}
let speaker = new Speaker('Anne', 'Frank', 'Jon@gmail.com', 'Bio')
speaker.getBiography()
console.log(speaker)

var date = ('10/10/19')
Speaker.prototype.markInactive = function (date) {
    this.isActive = false;
    this.inactiveDate = date;

}
speaker.markInactive(date)
function KeynoteSpeaker (websites, keynoteTopics, breakouts, givenName, surname, email, biography) {
    Speaker.call(this, givenName, surname, email, biography)
    this.websites = websites;
    this.keynoteTopics = keynoteTopics;
    this.breakouts = breakouts;
}
let keynoteSpeaker = new KeynoteSpeaker('www.AnneFrank.com', 'The Diary of a Young Girl Teacher’s ', 'Annelies Marie Frank was born in Frankfurt ', 'Anne', 'Frank', 'annefrank@gmail.com', 'The Diary of a Young Girl')
console.log(keynoteSpeaker);

function WorkshopSpeaker (workshopTopic, givenName, surname, email, biography) {
    Speaker.call(this, givenName, surname, email, biography)
    this.workshopTopic = workshopTopic;
}
let workshopSpeaker = new WorkshopSpeaker('Marie  was born in Frankfurt ', 'Marie', 'Frank', 'mariefrank@gmail.com', 'The Diary of a Girl')
console.log(workshopSpeaker);

KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
WorkshopSpeaker.prototype = Object.create(Speaker.prototype);
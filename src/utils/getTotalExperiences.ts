

const getTotalExperiences = () => {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    let yearDiff = currentYear - 2004
    let totExp = "" + yearDiff;

    if (currentMonth > 10) {
    totExp = yearDiff + "+"
    } else if (currentMonth <= 10 && currentDate < 31) {
    totExp = --yearDiff + "+"
    }
    
    return totExp
}
export default getTotalExperiences
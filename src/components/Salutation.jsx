export default function Salutation({ title }) {

    function getGreeting() {
        const currentHour = new Date().getHours(); // Get the current hour (0-23)
        if (currentHour >= 5 && currentHour < 12) {
            return "Good Morning!";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Good Afternoon!";
        } else if (currentHour >= 18 && currentHour < 22) {
            return "Good Evening!";
        } else {
            return "Good Night!";
        }
    }
    return <div>
        <h1>{title }</h1>
        <p>{getGreeting()}</p>
    </div>
}

const Calender = () => {
    const calculateRemainingDays = targetDate => Math.ceil((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24));
    const targetDate = '2024-01-10'
    const daysRemaining = calculateRemainingDays(targetDate);
    console.log(`Reaminingdays unitil ${targetDate}: ${daysRemaining}`)
    return (
        <div>
            <h1> after contest {daysRemaining} close</h1>
        </div>
    );
};

export default Calender;
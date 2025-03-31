import { useState, useEffect } from "react";
function Timer({ targetDate }) {
    const getNextMarch30 = () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const targetDate = new Date(currentYear, 2, 30); // March 30 (Month is zero-indexed)
    
        // If today is March 30 or later, set the target to next year
        if (today >= targetDate) {
          targetDate.setFullYear(currentYear + 1);
        }
        return targetDate;
      };
    
      const calculateTimeLeft = () => {
        const difference = getNextMarch30() - new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

  return (
    <div style={{color: "white"}}>
      <center>
        <h2 style={{fontSize: "45px"}}> Countdown to Next Birthday!</h2>
        <p style={{fontSize: "30px"}}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      </center>
    </div>
  );
}


export default Timer
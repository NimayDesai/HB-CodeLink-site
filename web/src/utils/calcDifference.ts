// Function to calculate the difference between the current time and a createdAt field
export function calculateDateDifference(createdAt: string): {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  // Parse the createdAt ISO string into a Date object
  const createdAtDate = new Date(createdAt);

  // Get the current date and time
  const now = new Date();

  // Calculate difference in years and months
  let years = now.getFullYear() - createdAtDate.getFullYear();
  let months = now.getMonth() - createdAtDate.getMonth();
  let days = now.getDate() - createdAtDate.getDate();
  let hours = now.getHours() - createdAtDate.getHours();
  let minutes = now.getMinutes() - createdAtDate.getMinutes();
  let seconds = now.getSeconds() - createdAtDate.getSeconds();

  // Adjust for months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for days
  if (days < 0) {
    months--;
    const lastMonthDate = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      createdAtDate.getDate()
    );
    days +=
      new Date(now.getFullYear(), now.getMonth(), 0).getDate() -
      lastMonthDate.getDate() +
      1;
  }

  // Adjust for hours
  if (hours < 0) {
    days--;
    hours += 24;
  }

  // Adjust for minutes
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  // Adjust for seconds
  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  // Return the result as an object
  return { years, months, days, hours, minutes, seconds };
}

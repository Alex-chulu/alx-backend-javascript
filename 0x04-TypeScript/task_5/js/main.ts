// Define the interfaces
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Create the functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'major' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Total Major Credits:', totalMajorCredits);

const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Total Minor Credits:', totalMinorCredits);


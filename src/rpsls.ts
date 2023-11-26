export type RPSLSOption = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
export type RPSLSResult = 'draw' | 'win' | 'loss';

export const CompareRPSLS = (a: RPSLSOption, b: RPSLSOption): RPSLSResult => {
  switch (a) {
    case 'rock':
      switch (b) {
        case 'rock':
          return 'draw';
        case 'scissors':
        case 'lizard':
          return 'win';
        default:
          return 'loss';
      }

    case 'paper':
      switch (b) {
        case 'paper':
          return 'draw';
        case 'rock':
        case 'spock':
          return 'win';
        default:
          return 'loss';
      }

    case 'scissors':
      switch (b) {
        case 'scissors':
          return 'draw';
        case 'paper':
        case 'lizard':
          return 'win';
        default:
          return 'loss';
      }

    case 'lizard':
      switch (b) {
        case 'lizard':
          return 'draw';
        case 'spock':
        case 'paper':
          return 'win';
        default:
          return 'loss';
      }

    case 'spock':
      switch (b) {
        case 'spock':
          return 'draw';
        case 'scissors':
        case 'rock':
          return 'win';
        default:
          return 'loss';
      }

    default:
      return 'loss';
  }
};

export default CompareRPSLS;

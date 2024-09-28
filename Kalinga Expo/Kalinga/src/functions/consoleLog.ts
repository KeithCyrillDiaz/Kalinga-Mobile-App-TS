interface LogWithColorParams {
    messageType: 'Ready' | 'Event' | 'Error' | 'Wait' | 'Warn';
    message: string;
    color?: 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'reset';
}

const colorCodes: Record<string, string> = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

export const logWithColor = ({
    messageType, 
    message, 
    color
}: LogWithColorParams) => {

    if(color){
        const messagePrefix = `${colorCodes[color] || colorCodes.reset}${messageType} - ${colorCodes.reset}`;
        console.log(`${messagePrefix}${message}`);
    }

    switch (messageType) {
        case "Ready":
            console.log(`${colorCodes['green']}Ready - ${colorCodes.reset}${message}`);
            break;
        case "Event":
            console.log(`${colorCodes['magenta']}Event - ${colorCodes.reset}${message}`);
            break;
        case "Error":
            console.error(`${colorCodes['red']}Error - ${colorCodes.reset}${message}`);
            break;
        case "Wait":
            console.log(`${colorCodes['cyan']}Wait - ${colorCodes.reset}${message}`);
            break;
        case "Warn":
            console.warn(`${colorCodes['yellow']}Warn - ${colorCodes.reset}${message}`);
            break;
        default:
            console.log(message); // Fallback for any unexpected messageType
    }
};
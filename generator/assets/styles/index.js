const button = document.getElementById('generate');
const alphabet = 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я';


const alphabetArray = alphabet.split(', ');


const generateRandomWord = () => {
    
    const randomIndexes = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * alphabetArray.length);
        randomIndexes.push(randomIndex);
    }

    // Извлечь соответствующие символы из alphabet
    const randomChars = randomIndexes.map(index => alphabetArray[index]);

    // Объединить символы в строку
    const randomWord = randomChars.join('');

    // Вывести в параграф под кнопкой
    document.getElementById('output').textContent = `Случайное слово: ${randomWord}`;
};


button.addEventListener('click', generateRandomWord);




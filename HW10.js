const readline = require('readline');
const openai = require('openai');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chatgpt = async (question, lang, format) => {
  const response = await openai.ChatCompletion.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a chatbot" },
      { role: "system", content: `Answer in ${lang}` },
      { role: "system", content: `Format in ${format}` },
      { role: "user", content: question }
    ]
  });

  return response.choices[0].message.content;
};

const translate = async (text, toLang) => {
  const response = await openai.ChatCompletion.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a chatbot" },
      { role: "system", content: `Answer in ${toLang}` },
      { role: "system", content: `Format in ${format}` },
      { role: "user", content: `Translate the following text to ${toLang}\n\n${text}` }
    ]
  });

  return response.choices[0].message.content;
};

const opList = ['quit', 'chatgpt', 'load', 'save', 'shell', 'translate', 'history'];
let user = process.argv[2] || 'user';
let lang = process.argv[3] || '繁體中文';
let format = process.argv[4] || 'Markdown+LaTex, add space before and after $..$';

console.log(`Welcome ${user} to shellgpt. You may use the following commands:`);
console.log(`1. chatgpt <question>\n2. load <file>\n3. save <file>\n4. translate\n5. history\n6. quit\n`);

let response = null;
let question = null;
const commandList = [];

const processCommand = async (command) => {
  commandList.push(command);
  const args = command.split(' ');
  if (args.length === 0) return;
  const op = args[0];
  const tail = args.slice(1).join(' ');

  if (!opList.includes(op)) {
    console.log(`Operation error, only ${opList} allowed!`);
    return;
  }

  if (op === 'chatgpt') {
    question = tail;
    response = await chatgpt(question, lang, format);
    console.log(response);
  } else if (op === 'quit') {
    rl.close();
  } else if (op === 'shell') {
    require('child_process').exec(tail, (error, stdout, stderr) => {
      console.log(stdout);
    });
  } else if (op === 'load') {
    const fs = require('fs');
    const fname = args[1];
    response = fs.readFileSync(fname, 'utf-8');
    console.log(response);
  } else if (op === 'save') {
    if (response === null) {
      console.log('error: no response to save!');
    } else {
      const fs = require('fs');
      const fname = args[1];
      fs.appendFileSync(fname, response);
    }
  } else if (op === 'translate') {
    const toLang = args[1] || lang;
    response = await translate(response, toLang);
    console.log(response);
  } else if (op === 'history') {
    for (let i = 0; i < commandList.length; i++) {
      console.log(`${i}: ${commandList[i]}`);
    }
  }
};

const promptCommand = () => {
  rl.question('command> ', async (command) => {
    console.log('');
    await processCommand(command);
    promptCommand();
  });
};

promptCommand();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


interface Person {
  name: string;
  score: number;
}

function main() {
  const rootElement = document.createElement('main');
  document.body.appendChild(rootElement);
  const root = ReactDOM.createRoot(rootElement);

  const helloHeaderObj = document.createElement('h1');
  helloHeaderObj.textContent = 'Hello, World!';
  rootElement.appendChild(helloHeaderObj);

  const form = document.querySelector('.form');


  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  if (form) {
      form.addEventListener('submit', handleSubmissionByUser);
  }
}

function handleSubmissionByUser(event: Event) {
  event.preventDefault();
  const input: HTMLInputElement = document.getElementById(
      'name'
  ) as HTMLInputElement;

  const person: Person = {
    name: "John",
    score: 69420,
  };

  addRecord(person)
}

async function addRecord(recordToAdd: Person) {
  try {
    const createdRecord = await prisma.highscores.create({
      data: {
        name: recordToAdd.name,
        score: 69420,
      },
    });
    
    console.log('Record created:', createdRecord);
  } catch (error) {
    console.error('Error creating record:', error);
  } finally {
    await prisma.$disconnect();
  }
}

window.addEventListener('load', main);


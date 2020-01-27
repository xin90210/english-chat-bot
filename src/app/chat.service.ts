import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from '../environments/environment'

// import { ApiAiClient } from 'api-ai-javascript'

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable() export class ChatService {

  // readonly token = environment.dialogflow.englishChatBot
  // readonly client = new ApiAiClient({ accessToken: this.token })


  constructor() { }

  // talk() {
  //   this.client.textRequest('Who are you!')
  //   .then(res => console.log(res))
  // }

  conversation = new Subject<Message[]>()
  messageMap = {
    'hey': 'Hi there',
    'Hey': 'Hi there',
    'hello': 'hey',
    'Hello': 'hey',
    'Who are you?': 'I am a ChatBot, you may practice English with me.',
    'who are you?': 'I am a ChatBot, you may practice English with me.',
    'what day is today?': 'today is date',
    'are you real?': 'In some way.',
    'what are you doing?': 'im trying to implement an AI in myself',
    'default': 'I do not understand you, human.'
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg)
    this.conversation.next([userMessage])
    const botMessage = new Message('bot', this.getBotMessage(msg))
    setTimeout(() => {
      this.conversation.next([botMessage])
    }, 1500);
  }
  getBotMessage(question: string) {
    let answer = this.messageMap[question]
    return answer || this.messageMap['default']
  }
}
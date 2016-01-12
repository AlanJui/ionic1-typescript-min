/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {}

class ChatsCtrl {
  private chats: any[];
  
  static $inject = ['Chats'];
  constructor(
    private Chats: Services.IChats
  ) {
    this.chats = Chats.all();
  }
  
  remove(chat) {
    this.Chats.remove(chat);
  }
}

interface IStateParams extends ng.ui.IStateParamsService {
  chatId: string;
}

class ChatDetailCtrl {
  private chat: Object;
  
  static $inject = ['Chats', '$stateParams'];
  constructor(
    private Chats: Services.IChats,
    private $stateParams: IStateParams
  ) {
    this.chat = Chats.get($stateParams.chatId);
  }
}

interface ISettings {
  enableFriends: boolean;
}

class AccountCtrl {
  private settings: ISettings;
  
  constructor() {
    this.settings = {
      enableFriends: true
    };
  }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('ChatsCtrl', ChatsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', AccountCtrl);


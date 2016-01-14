# 專案摘要

以 Ionic 開發 App ，若將原始程式碼自 ES5 JavaScript ，改用 TypeScript ，固然能因其「嚴謹」的特性，帶來諸多好處。但也因此， 原本 Script 語言獨有的特色－「「便捷」」，卻也因此隨之消逝。

支援 TypeScript 的 Editor 或 IDE 軟體，會在使用者編輯程式碼的時候，便開始進行「解譯」的工作，分析程式碼的語意（Syntax）。若是找到錯誤，便會透過某種「介面」向使用者回報：「哇～！我找到問題了喔！」。

解譯程式碼的語意，判斷是有否有錯誤，其依據源自：「TSLint Rules」，此為 TypeScript 的「檢查規則」。 預設的 TSLint Rules ，規格較高、要求從嚴，以致 Editor 或 IDE 的使用者，動不動就會看到一堆解譯的「錯誤」或「警告」。可是，經過編譯產生的 ES5 JavaScript 程式碼，卻能執行，功能可正常運作。

由此可見，預設的 TSLint Rules ，有點「管太多」了。甚至多到讓「初心者」，容易驚慌失措，在剛開始學用 TypeScript 的時候，就被過多，不是很必要的「錯誤」、「警示」訊息給打敗，因此失去了信心，放棄了 TypeScript 這個好東西。

最近做了些研究，那些 TSLint Rules 是可以先「關閉」不用的，讓 TypeScript 在解譯原始程式碼的時候，不會判定為「錯誤」；或是提出「警告」；使 TypeScript 剛開始的學習門檻，可以太為降低一些。

本專案便是因此研究「目的」，而致產生的結果。

專案以 Ionic App 為例，示範如何將本是 ES5 JavaScript 的原始程式碼，以 TypeScript 改寫。因為 Ionic 平台的基礎，源自 Angular 1.x ，所以，此處的作法，也能適用於將 Angular 1.x App 。

為使本專案的產出，是可以「實作」，可以「執行」，以驗證其理論的可行性。本專案的 TypeScript ，採 VSCode (Visual Studio Code) 作為程式碼的「編輯器（Editor）」， 並透過 VSCode 進行以下所列之程式開發作業：

 * 編輯（Edit）
 * 建置（Build）
 * 除錯（Debug）

上列之程式開發作業，均須進行相關的「設定」工作，方能使作業順利進行。每項作業配合使用的「設定檔」，及其工作目的說明如下。

### 編輯（Edit）

  如何編輯 `tslint.json` 檔案，用以設定 TSLint Rules ，使 TypeScript 的檢查規則不要設定的過於嚴格，以致於使用者在編輯原始程式碼的時候，就會被編輯器提報一堆的「錯誤」或「警示」。

### 建置（Build）

  如何設定 `tasks.json` 檔案，令使用者可以直接在 VSCode 編輯器，執行將 TypeScript 原始程式碼，編譯（Transpile）成 ES5 JavaScript 的「建置」工作。

### 除錯（Debug）

  如何設定 `tsconfig.json` 檔案，令其配合 VSCode 編輯器的「編輯」、「建置」工作。

  讓使用者在進行程式碼「編輯」的過程，不會被 VSCode 編輯器抱怨，因為某些設定沒做，所以事情它不出如何進行。

  當使用者執行「建置」工作的時候，能夠產生 Source Map 檔案，並放對存放的「目錄」，以便使用者萬一需要進行除錯時，可在「除錯工具」（如：Chrome 的 DevTools）以 TypeScript 程式碼，對只能讀懂 ES5 JavaScript 的瀏覽器，進行程式的除錯。

對於喜歡使用 Gulp ，做為軟體「建置管理工具」的朋友，亦可參考本專案中的 `gulpfile.js` 。許多網路上的「文章」、「影片」，都有「如何將 TypeScript 程式碼編譯成 JavaScript」的指引。但是，常有「`產生 Source Map 檔案`」的遺漏，以致需要在瀏覽器中進行除錯工作的時候，使用者只能使用「JavaScript」，而不是依 TypeScript 進行。關於這點，本專案的 `gulpfile.js` 檔案，在程式碼中做了點「補漏」的工作。  

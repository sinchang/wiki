# Fix disabled input background is faded on iOS

RC: Safari, Firefox, and Chrome browsers on iOS are rending disabled input fields with an opacity of 0.4 This causes the input text and background colors to fade out.

Solution: force the opacity to 1.

Ref: https://github.com/Financial-Times/o-forms/issues/347

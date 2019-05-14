type CallBackError = Error | null
type CallBack = (error: CallBackError, response: Object) => void

function algo(callBackFunc: CallBack): any {
  if (callBackFunc) {
    callBackFunc(null, {})
  }
}

algo((error, response) => {})

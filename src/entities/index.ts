export interface Action {
  type: string
  payload: any
}

export type FuncDispatch = (action: Action) => void

export interface Article {
  articleId: string
  title: string
  summary: string
  updateTime: number
}

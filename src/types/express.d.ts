import "express"
import type { isExpression } from "typescript/unstable/ast"


declare global {
  namespace Express {
    interface Request {
      user?: {
        id:number
      }
    }
  }
}

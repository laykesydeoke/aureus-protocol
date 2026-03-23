export function paginationAuthMiddleware2(req: any, res: any, next: any) {
  const sender = req.headers['x-stacks-sender'];
  if (!sender) { res.status(401).json({ error: 'Missing sender header' }); return; }
  req.stacksSender = sender;
  next();
}
export function paginationValidationMiddleware2(req: any, res: any, next: any) {
  const { value } = req.body;
  if (typeof value !== 'number' || value <= 0) {
    res.status(400).json({ error: 'Invalid value for pagination' }); return;
  }
  next();
}

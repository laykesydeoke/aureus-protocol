# api-gw - Testing Guide

## api-gw Testing Guide

### Running Tests
```bash
npx vitest run tests/api-gw*
```

### Test Categories
- **Unit Tests**: Individual function behavior
- **Integration Tests**: Multi-step workflows
- **Edge Cases**: Zero values, unauthorized access

### Coverage Goals
- All public functions tested
- All error paths covered
- Owner vs non-owner scenarios

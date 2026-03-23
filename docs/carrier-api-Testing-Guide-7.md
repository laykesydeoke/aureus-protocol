# carrier-api - Testing Guide

## carrier-api Testing Guide

### Running Tests
```bash
npx vitest run tests/carrier-api*
```

### Test Categories
- **Unit Tests**: Individual function behavior
- **Integration Tests**: Multi-step workflows
- **Edge Cases**: Zero values, unauthorized access

### Coverage Goals
- All public functions tested
- All error paths covered
- Owner vs non-owner scenarios

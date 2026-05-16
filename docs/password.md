# password

Password complexity validation.

```ts
import { validatePasswordComplexity } from '@linagora/twake-crypto-utils';
```

## `validatePasswordComplexity(password)`

Returns `true` if `password` meets all of:

- at least **8 characters**
- at least one **digit** (`0-9`)
- at least one **lowercase** letter (`a-z`)
- at least one **uppercase** letter (`A-Z`)

```ts
validatePasswordComplexity('Password1');     // → true
validatePasswordComplexity('short1A');       // → false (< 8 chars)
validatePasswordComplexity('nouppercase1');  // → false
```

## Caveats

- **ASCII-only.** The regex uses ASCII character classes; full-width digits (`１`) and unicode-letter scripts that don't have explicit case (e.g. CJK) do not satisfy the digit/letter requirements.
- **No special-character requirement.** Intentional - adding one tends to push users toward predictable substitutions (`Password1!`) without measurable security gain.
- **No length cap.** Hash whatever the user gives you. Long passphrases are good.
- **No common-password check.** This helper is structural only. If you need to reject leaked passwords, check against a corpus separately.

If you need stricter rules, validate before calling this (it's a regex test - adding more conditions won't conflict with anything).

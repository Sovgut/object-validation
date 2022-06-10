```typescript
import validateObject, { property, Scheme } from '@sovgut/object-validation';

const request = {
  body: {
    email: 'example@email.com',
    password: 'superSecretPassw0rd!',
    confirmPassword: 'superSecretPassw0rd!',
  },
};

const validationScheme: Scheme[] = [
  property('email:string'),
  property('password:string').min(8).max(32),
  property('confirmPassword:string').min(8).max(32).compareWith('password'),
  property('age:number').optional(),
];

const { success, reason } = validateObject(request.body, validationScheme);
console.log(success, reason);
```

API

<hr />

### `property(key: "name:primitive"): Scheme`

_Params_

- `key` - first part of this string is the property name from the object, second is the type of property from the object

_Returns_

- `min(length: number)` - sets the minimum of length for string source
- `max(length: number)` - sets the maximum of length for string source
- `compareWith(key: string)` - sets comparison within source and target properties
- `onValidate(callback: (value: any) => string | void)` - sets additional custom validation for source property, should return an error string like `"something-wrong-happened"` or nothing (`void`)
- `optional()` - sets source property as optional and any validations just skipped this property if error raised

<hr />

### `validateObject(target: any, scheme: Scheme[]): Response`

_Params_

- `target` - the source object that should be validated
- `scheme` - validation scheme array

_Returns_

- `response` - the response object that have `success` and `reason` properties, `reason` is `undefined` by default, this object have text when error raised

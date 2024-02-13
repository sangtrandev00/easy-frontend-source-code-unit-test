import { getDisplayedAddress } from './String06';

describe('getDisplayedAddress() -- V1', () => {
  test('should return "" if address is empty object}', () => {
    expect(getDisplayedAddress({})).toMatch('');
  });

  test('should return address like format below this example', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toMatch('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');

    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      })
    ).toMatch('Nguyen Cong Tru, Binh Thanh District');
  });
});

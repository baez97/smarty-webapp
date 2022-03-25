import { formatMemory } from 'helpers/formatMemory';
describe('The formatMemory Helper...', () => {
  it('Returns an empty string if no memory is provided', () => {
    const result = formatMemory(0);
    expect(result).toBe('');
  });

  it('Returns MB if the memory is smaller than 1024', () => {
    const result = formatMemory(1023);
    expect(result).toBe('1023 Mb')
  });

  it('Returns GB if the memory is bigger than 1024', () => {
    const result = formatMemory(2048);
    expect(result).toBe('2 Gb')
  });
});
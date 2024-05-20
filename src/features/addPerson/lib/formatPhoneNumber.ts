export const formatPhoneNumber = (value: string): string => {
  const rawValue = value.replace(/\D/g, "");
  const length = rawValue.length;

  let formattedValue = rawValue;

  if (length > 0) formattedValue = `(${rawValue.substring(0, 3)}`;
  if (length > 3) formattedValue += `)${rawValue.substring(3, 6)}`;
  if (length > 6) formattedValue += `-${rawValue.substring(6, 8)}`;
  if (length > 8) formattedValue += `-${rawValue.substring(8, 10)}`;

  return formattedValue;
};

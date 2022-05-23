export const screateLogger = (name) => {
  const logs = [];

  return {
    log(massage) {
      logs.push(`log - ${name} - ${massage}`);
    },
    error(errorText) {
      logs.push(`error - ${name} - ${errorText}`);
    },
    getLogs() {
      return logs;
    },
  };
};

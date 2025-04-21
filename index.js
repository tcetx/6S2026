function tcetx(command) {
    const data = {
      sc1: "This command is SC1 and description is Softwares",
      sc2: "This command is SC2 and description is Systems",
    };
  
    return data[command.toLowerCase()] || "Unknown command";
  }
  
  module.exports = tcetx;
  
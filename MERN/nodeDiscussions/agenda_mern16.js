/**
 * Agenda
 * 1. child process
 * 2. event emitter
 * 3. http server
 * 4. event loop and architecture
 *
 *
 * Asynchronous I/O operations
 * Event driven architecture
 * 
 *Child Process -> allow NOde to perform other operations in a separate process 
 with child process, we can do 4 type of things
 a. Exec -> can run any shell command
 b. execFile => run a file
 c. spawn -> create a new process and run a different programs 
     c.1 -> stream the output and error stream of that process
     c.2 -> generally used for long lived process
d. fork -> create a new node process and run a different node program
    d.1 -> copy of parent node process
    d.2 -> communication between parent and child process
    d.3 IPC -> inter process communication


Spawn vs Fork
Spawn ( email Communication)
Fork ( isntant messaging communication)

difference between process.nextTick and setImmediate
process.nextTick -> execute immediately after current operation
setImmediate -> runs after I/O operations or poll phase


Event Emitter class
 */

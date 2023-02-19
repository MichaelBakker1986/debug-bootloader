# debug-bootloader

This is a simple bootloader that can be used to debug the boot process of a node application.
Converts console.info to traces to track the file and line number information without modifying the source code.
Depends on consola for some additional features.

## Usage

```bash 
node -r ./node_modules/debug-bootloader/debug-bootloader.cjs ...
```

import subprocess
import sys
import os
from datetime import datetime

def run_build():
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_file = "Dump.log"
    
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(f"\n{'='*80}\n")
        f.write(f"Build started at: {timestamp}\n")
        f.write(f"{'='*80}\n\n")
        f.flush()
    
    try:
        process = subprocess.Popen(
            ["pnpm", "run", "build"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding="utf-8",
            errors="replace",
            bufsize=1,
            universal_newlines=True,
            cwd=os.getcwd()
        )
        
        stdout_lines = []
        stderr_lines = []
        
        while True:
            try:
                stdout_line = process.stdout.readline()
                stderr_line = process.stderr.readline()
                
                if stdout_line:
                    stdout_lines.append(stdout_line)
                    print(stdout_line, end="")
                    
                if stderr_line:
                    stderr_lines.append(stderr_line)
                    print(stderr_line, end="", file=sys.stderr)
                    
                if stdout_line == "" and stderr_line == "" and process.poll() is not None:
                    break
                    
                if process.poll() is not None:
                    break
            except:
                break
        
        returncode = process.wait()
        
        with open(log_file, "a", encoding="utf-8") as f:
            f.write("STDOUT:\n")
            f.write("".join(stdout_lines))
            f.write("\n\nSTDERR:\n")
            f.write("".join(stderr_lines))
            f.write(f"\nReturn code: {returncode}\n")
            
        if returncode != 0:
            print(f"\nBuild failed with return code {returncode}")
            print(f"Error details saved to {log_file}")
            sys.exit(1)
        else:
            print("\nBuild succeeded!")
            print(f"Build details saved to {log_file}")
            
    except Exception as e:
        with open(log_file, "a", encoding="utf-8") as f:
            f.write(f"\nException occurred: {str(e)}\n")
            import traceback
            f.write(traceback.format_exc())
        print(f"Exception: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_build()

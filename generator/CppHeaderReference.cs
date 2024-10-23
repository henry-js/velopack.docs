﻿namespace DocGenerator;

public class CppHeaderReference
{
    public static async Task UpdateCppReference(string outputPath)
    {
        var cppHeaderUrl = "https://raw.githubusercontent.com/velopack/velopack/refs/heads/develop/src/lib-cpp/include/Velopack.h";
        var cppHeader = Util.DownloadString(cppHeaderUrl);

        var headerPath = Path.Combine(outputPath, "Velopack.h");
        await File.WriteAllTextAsync(headerPath, cppHeader);

        await Util.StartShellProcess("docker",
            [
                "run",
                "--rm",
                "-v",
                outputPath + ":/include",
                "-w",
                "/include",
                "standardese/standardese",
                "standardese",
                "--compilation.standard=c++17",
                "--comment.free_file_comments=1",
                "Velopack.h"
                ],
            outputPath);

        File.Delete(headerPath);
        File.Delete(Path.Combine(outputPath, "standardese_files.md"));
        File.Delete(Path.Combine(outputPath, "standardese_modules.md"));

        await Util.SetPageSidebarOverview(Path.Combine(outputPath, "standardese_entities.md"));
    }
}
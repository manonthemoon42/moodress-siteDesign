while true
  Dir.glob(File.join('**', '*.haml')) do |file|
    compiled_file = File.basename(file, '.*') + '.html'
    if !File.exists?(compiled_file) or File.mtime(file) > File.mtime(compiled_file)
      `haml #{file} #{compiled_file}` if File.exists?(file)
    end
  end
end

package br.com.projeto.FitStore.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {
    private final Cloudinary cloudinary;

    public CloudinaryService(Dotenv dotenv) {
        this.cloudinary = new Cloudinary(dotenv.get("CLOUDINARY_URL"));
    }

    public String uploadImagem(MultipartFile file, String nomeArquivo) throws IOException {
        Map<String, Object> params = ObjectUtils.asMap(
                "public_id", nomeArquivo,
                "overwrite", true,
                "resource_type", "image"
        );

        Map uploadResult = cloudinary.uploader().upload(file.getBytes(), params);
        return (String) uploadResult.get("url");
    }
}

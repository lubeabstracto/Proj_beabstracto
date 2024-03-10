// fragmentShader.glsl.js
const fragmentShader = `
uniform float u_red;
uniform float u_green;
uniform float u_blue;

void main() {
    gl_FragColor = vec4(u_red / 255.0, u_green / 255.0, u_blue / 255.0, 1.0);
}
`;

export default fragmentShader;
